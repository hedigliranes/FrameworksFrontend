import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() nome: string
  @Input() desc: string
  @Input() url: string
  @Input() index: string
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  show = false;

  showModal(){
    this.show = !this.show;
  }
  
  constructor() { }

  ngOnInit(): void {

  }

  remover(date: any):void {
    this.delete.emit(date);
  }

}
