import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '../store';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() nome: String;
  @Input() index: String;
  @Input() desc: String;
  modal: string;
  Examplemodal: string;
  ExamplemodalT: string;
  @Output() adotar: EventEmitter<any> = new EventEmitter<any>();


  constructor(public store: Store) { }

  ngOnInit(): void {
    this.modal = "modal"+this.index;
    this.Examplemodal = "Examplemodal"+this.index;
    this.ExamplemodalT = "#Examplemodal"+this.index;
  }

  ngAfterViewInit(){
    document.getElementById(this.modal).style.display = "none";
    document.getElementById(this.modal).click();
  }
  
  adocao(): void {
    this.store.deleteDog(this.index);
  }

}
