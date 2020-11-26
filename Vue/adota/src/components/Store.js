
let Alldogs = ([])

export const dogs = Alldogs

export function createDog (nome, info, img) {
  let dogsAux = Alldogs;
  dogsAux.push({"nome": nome.value, "info": info.value, "img": img});
  Alldogs = dogsAux;}

export function updateDog(dog, index) {
  let aux = Alldogs;
  aux[index] = dog;
  Alldogs = aux}

export function deleteDog(index) {
  const aux = Alldogs;
  aux.splice(index, 1);
  Alldogs = aux; 
}