import { Component, EventEmitter, Output } from '@angular/core';
import { JuegosService } from '../../juegos.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  termino: string = '';
  @Output() onBuscar: EventEmitter<string> = new EventEmitter();

  buscar(): void {
    if(this.termino.trim() === '') return;
    console.log('Método buscar llamado con término:', this.termino); // Aquí añades el console.log
    this.onBuscar.emit(this.termino);
  }
  

}
