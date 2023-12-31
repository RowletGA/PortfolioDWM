
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JuegoResponse, Result } from 'src/app/juego.interface';
import { JuegosService } from '../../juegos.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  
  juegos: JuegoResponse = {
    count: 0,
    next: '',
    previous: '',
    results: []
  };
  juegoSeleccionado?: Result;
  
  constructor(private juegosService: JuegosService) { }

  ngOnInit(): void {
    this.getJuegos();
  }

  getJuegos(): void {
    this.juegosService.obtenerJuegos().subscribe({
      next: (juegos) => (this.juegos = juegos),
      error: (error) => console.error('Error obteniendo juegos:', error)
    });
  }

  buscar(termino: string): void {
    console.log('Método buscar en PrincipalComponent llamado con término:', termino); 
    this.juegosService.obtenerJuegosPorTermino(termino).subscribe({
      next: (response) => {
        console.log('Respuesta del servicio:', response);
        this.juegos = response;
      },
      error: (error) => console.error('Error en la búsqueda:', error)
    });
  }
  
  onSelect(juego: Result): void { 
    this.juegoSeleccionado = juego; 
  }
  mostrarModal: boolean = false;
  
  abrirModal(juego: Result): void {
    this.juegoSeleccionado = juego;
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
  }
}
