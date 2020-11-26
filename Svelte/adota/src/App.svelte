<script>
	import Card from './Card.svelte'
	import Cadastro from './Cadastro.svelte'
	import { onMount } from 'svelte';
	import { dogs } from './Store.js'

 	// let dogs = [
    //     {"nome": "Bob", "info": "Cachorro amigavel !", "img": null},
    //     {"nome": "Billy", "info": "Me adota pf", "img": null}
	//   ]

	let photos;
	let show;

	// function cadastrar(event) {
	// 	console.log(event)
    //   const aux = dogs;
    //   aux.push({"nome": event.detail.nome, "info": event.detail.desc, "img": event.detail.img});
    //   dogs = aux;
    // }

	function showModal(){
      show = !show;
 	}
	
	onMount(async () => {
	//   $dogs.forEach(async (item) => {
	// 	const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
	// 	photos = await res.json();
	// 	item.img = photos.message;
	// 	dogs = dogs
	// 	});
	});

	// function removerDog(event){
    //       const aux = dogs;
    //       aux.splice(event.detail, 1);
    //       dogs = aux;
	// }

	// function editar(event){
    //       const aux = dogs;
	// 	  aux[event.detail.id].nome = event.detail.nome; 
	// 	  aux[event.detail.id].info = event.detail.desc; 
    //       dogs = aux;
	// }

</script>

<main>
	<nav class="navbar navbar-light bg-light">
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a class="navbar-brand" href="#">
		  <img src="/logo.png" width="250" height="150" alt="" loading="lazy">
		</a>
	  </nav>
	  <header class="App-header">
		<p >
		Plataforma dedica a fazer os doguinhos mais felizes !!!!
		<br/>
		<button type="button" class="btn btn-success" on:click={showModal}>Cadastre</button>
	</p>
	</header>
	<div class="row row-cols-3">
		{#each $dogs as dog, index}
				<div class="col">
					<Card nome={dog.nome} index={index} desc = {dog.info} img ={dog.img}/>
				</div>
		{/each}
	</div>

	{#if show === true}
    	<Cadastro></Cadastro>
  {/if}

</main>

<style>

.navbar {
  display: block !important;
  text-align: center;
}

.App-header {
  background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("/banner.jpg");
  background-size: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
  text-align: center;
}
</style>