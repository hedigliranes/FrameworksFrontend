import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {ApiService } from '../api.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  url: string;
  @Output() cadastrar: EventEmitter<any> = new EventEmitter<any>();

  constructor(private apiService: ApiService) { }



  ngOnInit(): void {
    this.apiService.getImgs().subscribe((data) => {
      this.url = data['message'];
    })   
  }

  ngAfterViewInit(){
    document.getElementById("modalCadastro").style.display = "none";
    document.getElementById("modalCadastro").click();
  }

  cadastro(nome, desc){
    this.cadastrar.emit({nome:nome, desc:desc, url: this.url});
  }

}
