
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JuegoResponse } from './juego.interface';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  private apiKey = '0e048e7ff41e4587bc77e0d43b4e924b';
  private baseUrl = 'https://api.rawg.io/api/games';

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.error('Error:', error);
    return throwError('Ocurrió un error al cargar los juegos. Por favor, inténtelo de nuevo más tarde.');
  }

  obtenerJuegos(): Observable<JuegoResponse> {
    const url = `${this.baseUrl}?key=${this.apiKey}`;
    return this.http.get<JuegoResponse>(url).pipe(
      catchError(this.handleError)
    );
  }

  obtenerJuegosPorTermino(termino: string): Observable<JuegoResponse> {
    const url = `${this.baseUrl}?key=${this.apiKey}&search=${termino}`;
    return this.http.get<JuegoResponse>(url).pipe(
      catchError(this.handleError)
    );
  }
}
