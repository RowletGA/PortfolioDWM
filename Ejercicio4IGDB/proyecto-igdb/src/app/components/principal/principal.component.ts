import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { JuegoResponse } from 'src/app/juego.interface';
import	{	JuegosService	}	from	'../../juegos.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit{

  constructor(private juegosService : JuegosService) { }

  juegos: JuegoResponse = {
    count: 0,
    next: '',
    previous: '',
    results: []
  };
  ngOnInit(): void {
      this.getJuegos();
  }
  getJuegos(): void {
    this.juegosService.obtenerJuegos().subscribe(juegos => (this.juegos = juegos)
   
    );
  }


}
