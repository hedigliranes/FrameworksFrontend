<template>
  <div class="hello">
      <b-navbar variant="faded" type="light">
        <b-navbar-brand href="#" class="App"><img
          src="../assets/logo.png"
          width="250"
          height="150"
          class="d-inline-block logo"
          alt="React Vue"
        /></b-navbar-brand>
      </b-navbar>
            <header class="App-header">
          <p >
          Plataforma dedica a fazer os doguinhos mais felizes !!!!
          <br/>
            <b-button variant="success" v-on:click="showModal">Cadastre seu doginho</b-button>
        </p>
      </header>
      <b-container>
      <b-row cols = 3>
        <b-col v-for="(dog, index) of Alldogs" :key="index">
        <Cards :dog = "dog" :index = "index" />
        </b-col>
      </b-row>
    </b-container>
    <h1 v-if="show === true">
        <Cadastro/>  
    </h1>
  </div>
</template>

<script>

// import axios from 'axios';
import Cards from './Cards';
import Cadastro from './Cadastro';

import {
  dogs
} from './Store'


export default {
  name: 'HelloWorld',
  components: { Cards, Cadastro },
  data: function() {
    return {
      current: 0,
      show: false,
      Alldogs: dogs
    } 
  },

  methods: {
      // callbackFunction(childData){
      //     console.log(this.dogs);
      //     const aux = this.dogs;
      //     aux.splice(childData, 1);
      //     this.dogs = aux;
      // },
    showModal: function() {
      this.show = !this.show;
    }
    // cadastrar(nome, info, img) {
    //   console.log(nome)
    //   const aux = this.dogs;
    //   aux.push({"nome": nome, "info": info, "img": img});
    //   this.dogs = aux;
    // },
    // editar(nome, info, id) {
    //   console.log(nome)
    //   const aux = this.dogs;
    //   aux[id].nome = nome;
    //   aux[id].info = info;
    //   this.dogs = aux;
    // }
  },

mounted(){

  console.log(this.Alldogs)

  //  this.dogs.forEach((item) => {
  //   axios.get(`https://dog.ceo/api/breeds/image/random`)
  //   .then(response => {
  //     item.img = response.data.message;
  //   })
  //   .catch(e => {
  //     this.errors.push(e)
  //   })

  //   });
  
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
