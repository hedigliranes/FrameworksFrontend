import { Component } from '@angular/core';
import {ApiService } from './api.service';
import {Store} from './store'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adota';

  // dogs = [
  //   {"nome": "Bob", "info": "Cachorro amigavel !", "img": null},
  //   {"nome": "Billy", "info": "Me adota pf", "img": null}
  // ]
  show = false;
  

  constructor(private apiService: ApiService, public store: Store ) { }

  ngOnInit(): void {
    for (let index = 0; index < this.store.dogs.length; index++) {
      this.apiService.getImgs().subscribe((data) => {
        this.store.dogs[index].img = data['message'];
      })      
    }
  }

  showModal(){
    this.show = !this.show;
  }
//   removerDog(date: any){
//     const aux = this.dogs;
//     aux.splice(date, 1);
//     this.dogs = aux;
//     console.log(this.dogs);
//   }

//   addDog(date: any){
//       console.log(date)
//       const aux = this.dogs;
//       aux.push({"nome": date.nome, "info": date.desc, "img": date.url});
//       this.dogs = aux;
//   }

//   editarDog(date: any){
//     console.log(date)
//     const aux = this.dogs;
//     aux[date.index].nome = date.nome;
//     aux[date.index].info = date.desc;
//     this.dogs = aux;
// }
}
