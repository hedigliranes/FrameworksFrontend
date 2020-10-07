<button type="button" id="cadastroModal" class="btn btn-primary" data-toggle="modal" data-target="#cModal">
    Launch demo modal
  </button>
  
  <div class="modal fade" id="cModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header" style="display:block">
          <h5 class="modal-title" id="exampleModalLabel">Cadastrar Cachorro</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="form-group">
            <label for="exampleFormControlInput1">Nome</label>
            <input bind:value={nome} type="input" class="form-control" id="exampleFormControlInput1" placeholder="Insira o nome">
          </div>
          <br/>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Descrição</label>
            <textarea bind:value={desc} class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Fale sobre ele"></textarea>
          </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" on:click={cadastro} data-dismiss="modal">Cadastrar</button>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
import { onMount } from 'svelte';
import { createEventDispatcher } from 'svelte'

export let nome = ""
export let desc = ""
let photos;
let img;

 const dispatcher = createEventDispatcher()

 onMount(async () => {
		const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
		photos = await res.json();
		img = photos.message;
        });

onMount(() => {
    document.getElementById("cadastroModal").style.display = "none";
    document.getElementById("cadastroModal").click();
});

function cadastro(){
    console.log(nome)
    dispatcher('cadastrar', {nome: nome, desc: desc, img: img})
}

</script>