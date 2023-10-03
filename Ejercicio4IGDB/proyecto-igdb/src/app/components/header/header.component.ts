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
    // Aquí puedes implementar la lógica para buscar juegos y navegar a la página de resultados
    // Por ejemplo, puedes usar el Router para navegar a una página de resultados con el término de búsqueda
    if (termino.trim() !== '') {
      this.router.navigate(['/resultados', termino]);
    }
  }
}
