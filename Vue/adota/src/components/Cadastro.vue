<template>
    <div>
        <b-modal @ok="cadastrar"
         ok-title = "Cadastrar" ref="my-modal" id="modal-1" title="Cadastrar o Doguinho">
            <b-form-group id="input-group-2" label="Nome:" label-for="input-2">
             <b-form-input
                id="input-2"
                v-model="nome"
                required
                placeholder="Nome do Doguinho"
                >
                </b-form-input>
                <br/>
            <label for="textarea">Descrição:</label>
            <b-form-textarea
                id="textarea"
                v-model="desc"
                placeholder="Fale Sobre Ele"
                rows="6"
                max-rows="6"
        ></b-form-textarea>
            </b-form-group>
            
        </b-modal>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Cadastro',

  data: function() {
    return {
      current: 0,
      nome: "",
      desc: "",
      img: ""
    } 
  },

  methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      cadastrar: function() {
        this.$emit("cadastrar", this.nome, this.desc, this.img);
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
