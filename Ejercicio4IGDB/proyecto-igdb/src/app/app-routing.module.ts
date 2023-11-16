// Importa los módulos y componentes necesarios.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { DetalleComponent } from './detalle.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

// Define las rutas de la aplicación.
const routes: Routes = [
  { path: '', component: PrincipalComponent, pathMatch: 'full' }, // Ruta para la página principal.
  { path: 'detalle/:id', component: DetalleComponent }, // Ruta para los detalles del juego.
  { path: 'buscar', component: SearchBarComponent }, // Ruta para el buscador de juegos.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
