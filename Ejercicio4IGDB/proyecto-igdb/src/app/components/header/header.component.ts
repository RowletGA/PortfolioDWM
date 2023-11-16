import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  terminoBusqueda: string = '';

  constructor(private router: Router) {}

  buscarJuegos(termino: string): void {
    if (termino.trim() !== '') {
      this.router.navigate(['/resultados', termino]);
    }
  }
}
