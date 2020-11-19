<button type="button" id={modal} class="btn btn-primary" data-toggle="modal" data-target={ExamplemodalT}>
    Launch demo modal
  </button>
  
  <div class="modal fade" id={Examplemodal} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header" style="display:block">
          <h5 class="modal-title" id="exampleModalLabel">Editar Cachorro</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="form-group">
            <label for="exampleFormControlInput1">Nome</label>
            <input bind:value={nome} type="input" on:blur={checkField('nome',nome)} class="form-control" id="exampleFormControlInput1" placeholder="Insira o nome">
            <div class="error" style="color:red">{ nameError }</div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Descrição</label>
            <textarea on:blur={checkField('desc',desc)} bind:value={desc} class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Fale sobre ele"></textarea>
          </div>
          <div class="error" style="color:red">{ nameInfo }</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" on:click={editar} disabled = {valid != "valido"} data-dismiss="modal">Editar</button>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
import { onMount } from 'svelte';
import { createEventDispatcher } from 'svelte'

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

export let nome;
export let desc;
export let index;

let nameError = "";
let nameInfo = "";

let valid = "valido"

let photos;

let img;

 let modal = "modalEdicaomodal" + index;
 let Examplemodal = "Edicaomodal" + index;
 let ExamplemodalT = "#Edicaomodal" + index;
 const dispatcher = createEventDispatcher()

 onMount(async () => {
		const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
		photos = await res.json();
		img = photos.message;
        });

onMount(() => {
    document.getElementById(modal).style.display = "none";
    document.getElementById(modal).click();
});

function editar(){
    dispatcher('editar', {nome: nome, desc: desc, id:index})
}

function checkField(name, valueCamp) {
        const value = valueCamp;
        const error = validate[name] ? validate[name](value) : null        
              if(error != null){
                if(name == "nome"){
                  nameError = error;
                }else if(name == "desc"){
                  nameInfo = error;
                }
              }

              if(error != null){

                valid = "invalido";

              }else if(error == null){
                if(name == "nome" && nameError != ""){
                  nameError = "";
                }else if(name == "desc" && nameInfo != ""){
                  nameInfo = "";
                }
              }

              if(nameError == "" && nameInfo == ""){
                valid = "valido";
              }
          console.log(valid)

    }

</script>