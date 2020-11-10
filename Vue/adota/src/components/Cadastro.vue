<template>
    <div>
        <b-modal :ok-disabled="erros > 0" @ok="cadastrar"
         ok-title = "Cadastrar" ref="my-modal" id="modal-1" title="Cadastrar o Doguinho">
            <b-form-group id="input-group-2" label="Nome:" label-for="input-2">
             <b-form-input
                id="input-2"
                v-model="nome"
                required
                placeholder="Nome do Doguinho"
                @blur="checkField('nome')"
                >
                </b-form-input>
                <br/>
            <div class="error" style="color:red">{{ nameError }}</div>
                <br/>
            <label for="textarea">Descrição:</label>
            <b-form-textarea
                id="textarea"
                @blur="checkField('desc')"
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
import axios from 'axios';

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

export default {
  name: 'Cadastro',

  data: function() {
    return {
      current: 0,
      nome: "",
      desc: "",
      img: "",
      erros: 2,
      nameError: " ",
      nameInfo: " "
    } 
  },

  methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      cadastrar: function() {
        this.$emit("cadastrar", this.nome, this.desc, this.img);
      },
      checkField(name) {
        let count = this.erros;
        const value = this._data[name]
        const error = validate[name] ? validate[name](value) : null        
        if(count > 0){

              if(error != null){
                if(name == "nome"){
                  this.nameError = error;
                }else if(name == "desc"){
                  this.nameInfo = error;
                }
              }

              if(error != null && this.erros < 2){
                count++;
              }else if(error == null){
                if(name == "nome" && this.nameError != ""){
                  count--;
                  this.nameError = "";
                }else if(name == "desc" && this.nameInfo != ""){
                  count--;
                  this.nameInfo = "";
                }
              }
        }else if(count == 0){

              if(error != null){
                count++;
                 if(name == "nome"){
                  this.nameError = error;
                }else if(name == "desc"){
                  this.nameInfo = error;
                }
            }
          }
          console.log(error)
          this.erros = count;
          console.log(this.erros)
    }
    },
  mounted(){
      this.showModal();

    axios.get(`https://dog.ceo/api/breeds/image/random`)
    .then(response => {
      this.img = response.data.message;
    })
    .catch(e => {
      this.errors.push(e)
    })
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
