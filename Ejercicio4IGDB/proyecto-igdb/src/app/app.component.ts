import { Component, OnInit } from '@angular/core';
import { JuegosService } from '../app/juegos.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  juegos: any[] = [];

  constructor(private juegosService: JuegosService) { }

  ngOnInit(): void {
    this.juegosService.obtenerJuegos().subscribe(data => {
      this.juegos = data.results;
    });
  }
}
