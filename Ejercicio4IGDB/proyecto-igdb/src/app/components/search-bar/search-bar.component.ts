import { Component, EventEmitter, Output } from '@angular/core';
import { JuegosService } from '../../juegos.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  
  termino: string = '';

  // Declara un EventEmitter para notificar al componente padre cuando se realiza una búsqueda.
  @Output() onBuscar: EventEmitter<string> = new EventEmitter();

  constructor(private juegosService: JuegosService) { }

  buscar(): void {
    this.onBuscar.emit(this.termino);
  }
}
