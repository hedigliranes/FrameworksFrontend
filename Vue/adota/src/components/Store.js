import Vue from 'vue'

let Alldogs = []

export const dogs = (Alldogs)

export function createDog (nome, info, img) {
  let dogsAux = Alldogs;
  dogsAux.push({"nome": nome, "info": info, "img": img});
  Alldogs = dogsAux;
}

export function updateDog(dog, index) {
  console.log(index);
  Vue.set(Alldogs, index, dog)
  console.log(Alldogs)
}

export function deleteDog(index) {
  const aux = Alldogs;
  aux.splice(index, 1);
  Alldogs = aux; 
}