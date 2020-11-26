{#if ExamplemodalT}
<button type="button" id={modal} class="btn btn-primary" data-toggle="modal" data-target={ExamplemodalT}>
    Launch demo modal
  </button>
  
  <div class="modal fade" id={Examplemodal} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{nome}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
         {desc}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" on:click={adotar} data-dismiss="modal">Adotar</button>
        </div>
      </div>
    </div>
  </div>
  {/if}

<script>
import { onMount } from 'svelte';
import { createEventDispatcher } from 'svelte'
import { Store } from './Store.js'
let functions = Store()

export let nome
export let desc
export let index
 let modal = "modal" + index;
 let Examplemodal = "Examplemodal" + index;
 let ExamplemodalT = "#Examplemodal" + index;
 const dispatcher = createEventDispatcher()

onMount(() => {
    document.getElementById(modal).style.display = "none";
    document.getElementById(modal).click();
});

function adotar(){
    functions.remove(index)
}

</script>