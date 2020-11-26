<template>
    <div>
        <b-modal :ok-disabled="valid != 'valido'" @ok="editar"
         ok-title = "Editar" ref="my-modal" id="modal-1" title="Editar o Doguinho">
            <b-form-group id="input-group-2" label="Nome:" label-for="input-2">
             <b-form-input
                id="input-2"
                v-model="nome"
                required
                placeholder="Nome do Doguinho"
                @blur="checkField('nome')"
                @input="checkField('nome')"
                >
                </b-form-input>
                <br/>
            <div class="error" style="color:red">{{ nameError }}</div>
                <br/>
            <label for="textarea">Descrição:</label>
            <b-form-textarea
                id="textarea"
                @blur="checkField('desc')"
                @input="checkField('desc')"
                v-model="desc"
                placeholder="Fale Sobre Ele"
                rows="6"
                max-rows="6"
        ></b-form-textarea>
            <br/>
            <div class="error" style="color:red">{{ nameInfo }}</div>
            <br/>
            </b-form-group>
            
        </b-modal>
    </div>
</template>

<script>
//import axios from 'axios';

const validate = {
  desc: (value) => minLengthValidation(3, value),
  nome: requiredValidation
}

export function minLengthValidation(minLength, value) {
  if (!value || value.trim().length < minLength) {
    return `Este campo requer pelo menos ${minLength} caracteres`
  }
  return null
}

export function requiredValidation(value) {
  if (!value || value.trim() === '') {
    return 'Este campo é obrigatório'
  }
  return null
}

import {
  updateDog,
} from './Store'

export default {
  name: 'Edicao',
  props: ['dog', 'index'],

  data: function() {
    return {
      current: 0,
      nome: this.dog.nome,
      desc: this.dog.info,
      img: this.dog.img,
      erros: 2,
      nameError: "",
      nameInfo: "",
      valid: "valido"
    } 
  },

  methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      editar: function() {
        var dog = {"nome": this.nome, "info": this.desc, "img": this.img}
        updateDog(dog, this.index);
      },
      checkField(name) {
        const value = this._data[name]
        const error = validate[name] ? validate[name](value) : null        

              if(error != null){
                if(name == "nome"){
                  this.nameError = error;
                }else if(name == "desc"){
                  this.nameInfo = error;
                }
              }

        if(error != null){

              this.valid = "invalido";

              }else if(error == null){
                if(name == "nome" && this.nameError != ""){
                  this.nameError = "";
                }else if(name == "desc" && this.nameInfo != ""){
                  this.nameInfo = "";
                }
              }

              if(this.nameError == "" && this.nameInfo == ""){
                this.valid = "valido";
              }
          console.log(this.valid)
      }
    },
  mounted(){
      this.showModal();

    // axios.get(`https://dog.ceo/api/breeds/image/random`)
    // .then(response => {
    //   this.img = response.data.message;
    // })
    // .catch(e => {
    //   this.errors.push(e)
    // })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  margin-top: 1% !important; 
  margin-right: 5% !important;
}

.App{
  text-align: center;
}

.navbar {
  display: block !important;
}

.App-header {
  background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("../assets/banner.jpg");
  background-size: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
}
</style>
