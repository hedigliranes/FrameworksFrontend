<template>
    <b-container>
      <b-row>
        <b-col >
        <b-card
            :title="dog.nome"
            :img-src="dog.img"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
          >
            <b-card-text>
              {{dog.info}}
            </b-card-text>
            <b-button href="#" variant="primary" v-on:click="showModal">Ver informações</b-button>
            <b-button href="#" style="margin-left:15px" variant="danger" v-on:click="showModalEdicao">Editar</b-button>
          </b-card>
        </b-col>
      </b-row>
    <h1 v-if="show === true">
        <Details :detalhes = "dog" @clique="adotando"/>  
    </h1>
    <h1 v-if="showEdicao === true">
        <Edicao :dog = "dog" :index = "index" @editar="editar"/>  
    </h1>
    </b-container>
</template>

<script>
import Details from './Details';
import Edicao from './Edicao';

export default {
  name: 'Cards',
  props: ['dog', 'index'],
  components: { Details, Edicao },

  data: function() {
    return {
      current: 0,
      show: false,
      showEdicao: false
    } 
  },
  
  methods: {
    showModal: function() {
      this.show = !this.show;
    },
    showModalEdicao: function() {
      this.showEdicao = !this.showEdicao;
    },
    adotando: function() {

      this.$emit("adotar", this.index);
    },
    editar: function(nome, desc, index) {
      this.$emit("editar", nome, desc, index);
    }
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
