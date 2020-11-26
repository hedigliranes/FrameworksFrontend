<template>
    <div>
        <b-modal @ok="clique"
         ok-title = "Adotar" ref="my-modal" id="modal-1" :title="detalhes.nome">
            <p class="my-4">{{detalhes.info}}</p>
        </b-modal>
    </div>
</template>

<script>

import {
  deleteDog,
} from './Store'

export default {
  name: 'Details',
  props: ['detalhes', 'index'],

  data: function() {
    return {
      current: 0,
    } 
  },

  methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      clique: function() {
        deleteDog(this.index)
      }
    },
  mounted(){
      this.showModal();
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
