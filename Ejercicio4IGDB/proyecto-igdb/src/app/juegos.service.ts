
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JuegoResponse } from './juego.interface';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  private apiKey = '0e048e7ff41e4587bc77e0d43b4e924b'; 
  private baseUrl = `https://api.rawg.io/api/games?key=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  obtenerJuegos(): Observable<JuegoResponse> {
    return this.http.get<JuegoResponse>(`${this.baseUrl}`)
  }
  
  obtenerJuegosPorTermino(termino: string): Observable<JuegoResponse> {
    const url = `${this.baseUrl}&search=${termino}`;
    console.log('URL de búsqueda:', url); // Para imprimir la URL construida
    return this.http.get<JuegoResponse>(url);
  }
}
