import { writable } from 'svelte/store'

export const dogs = writable([])

export function Store() {
  const { subscribe, update } = writable([])

  // insere uma nova questão vazia no fim da lista
  function create(nome, desc, img) {
    dogs.update(n => [...n, {"nome": nome, "info": desc, "img": img}])
  }

  // substitui a questão que se encontra em um índice
  function change(dog, index) {
    dogs.update(values => [
      ...values.slice(0, index),  // elementos antes do índice
      dog,                 // novo elemento do índice
      ...values.slice(index+1)    // elementos depois do índice
    ])
  }

  // remove uma questão em um índice
  function remove(index) {
    dogs.update(value => [
      ...value.slice(0, index),  // elementos antes do índice
      ...value.slice(index+1)    // elementos depois do índice
    ])
  }

  // expõe o subscribe original mais as funções adicionais.
  return { subscribe, create, change, remove }
}