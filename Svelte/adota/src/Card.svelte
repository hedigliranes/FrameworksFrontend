  <div class="card" style="width: 18rem;">
    <img src={img} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{nome}</h5>
      <p class="card-text">{desc}</p>
      <a class="btn btn-primary" style="color:white !important" on:click={showModal}>Ver informações</a>
    </div>
  </div>

  {#if show === true}
    <Info nome = {nome} desc = {desc} index = {index} on:adocao1={remover}></Info>
  {/if}


<script>
import Info from './Info.svelte'
import { createEventDispatcher } from 'svelte'

export let nome
export let desc
export let img
export let index
let show = false;
const dispatcher = createEventDispatcher()
        
function showModal(){
      show = !show;
 }

 function remover(event){
    dispatcher('adocao2', event.detail)
 }
</script>