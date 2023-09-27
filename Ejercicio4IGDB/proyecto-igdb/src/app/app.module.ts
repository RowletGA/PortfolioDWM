import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { DetalleComponent } from './detalle.component';
import { DetalleJuegoComponent } from './components/detalle-juego/detalle-juego.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    NavigationComponent,
    CardComponent,
    ModalComponent,
    SearchBarComponent,
    DetalleComponent,
    DetalleJuegoComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
