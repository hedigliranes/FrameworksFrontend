import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'  // define como global
  })

  export class Store {
    dogs = []
  
     createDog (nome, info, img) {
        let dogsAux = this.dogs;
        dogsAux.push({"nome": nome, "info": info, "img": img});
        this.dogs = dogsAux;
      }
    
      updateDog (dog, index){
        let aux = this.dogs;
        aux[index] = dog;
        this.dogs = aux;
      }
    
      deleteDog(index) {
        const aux = this.dogs;
        aux.splice(index, 1);
        this.dogs = aux; 
      }
    
  }