import {useState, useEffect} from 'react';

var dogs = [];

export default function Store() {

  const createDog = (nome, info, img) => {
    let dogsAux = dogs;
    dogsAux.push({"nome": nome.value, "info": info.value, "img": img});
    dogs = dogsAux;
  }

  const updateDog = (dog, index) => {
    let aux = dogs;
    aux[index] = dog;
    dogs = aux;
  }

  const deleteDog = (index) => {
    const aux = dogs;
    aux.splice(index, 1);
    dogs = aux; 
  }

  return { dogs, createDog, updateDog, deleteDog }
}