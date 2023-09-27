import { Component, ViewChild } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { JuegosService } from '../../juegos.service'; // Asegúrate de importar tu servicio de juegos o el servicio que uses para buscar

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild(SideMenuComponent) sideMenu!: SideMenuComponent;

  constructor(private juegosService: JuegosService) { } // Inyecta tu servicio de juegos aquí

  toggleSideMenu(): void {
    this.sideMenu.toggle();
  }
  
  juegos: any[] = []; // propiedad para almacenar los resultados de la búsqueda
  
  buscar(termino: string): void {
    if (termino.trim() === '') return;
    this.juegosService.obtenerJuegosPorTermino(termino).subscribe(response => {
      console.log('Resultados de la búsqueda:', response);
      this.juegos = response.results; // asigna los resultados de la búsqueda a la propiedad juegos
    }, error => {
      console.error('Error en la búsqueda:', error);
    });
  }
}
