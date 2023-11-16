import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() juego: any;
  @Output() verMas = new EventEmitter<any>(); 
  mostrarDetalles() {
    this.verMas.emit(this.juego); 
}
}
