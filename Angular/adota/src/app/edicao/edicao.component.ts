import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

class Error {
  nome: string
  desc: string
}


@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.scss']
})
export class EdicaoComponent implements OnInit {
  @Input() erro: Error = new Error;

  @Input() nome: String;
  @Input() index: String;
  @Input() desc: String;
  modal: string;
  Examplemodal: string;
  ExamplemodalT: string;
  nomeBind : String = "";
  descBind : String = "";
  @Output() editar: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
    this.modal = "modalEdicao"+this.index;
    this.Examplemodal = "ModalEdicao"+this.index;
    this.ExamplemodalT = "#ModalEdicao"+this.index;
    this.nomeBind = this.nome;
    this.descBind = this.desc;
    console.log(this.index)
  }

  ngAfterViewInit(){
    document.getElementById(this.modal).style.display = "none";
    document.getElementById(this.modal).click();
  }
  
  edicao(nome, desc){
    this.editar.emit({nome:nome, desc:desc, index:this.index});
  }

}
