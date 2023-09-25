import { Component, OnInit } from '@angular/core';
import { JuegoResponse } from 'src/app/juego.interface';
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
  
  constructor(private juegosService : JuegosService) { }

  ngOnInit(): void {
    this.getJuegos();
  }

  getJuegos(): void {
    this.juegosService.obtenerJuegos().subscribe(juegos => (this.juegos = juegos));
  }

  buscarJuegos(termino: string): void {
    this.juegosService.obtenerJuegosPorTermino(termino).subscribe(juegos => (this.juegos = juegos));
  }
}
