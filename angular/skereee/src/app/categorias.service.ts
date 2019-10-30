import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Categoria } from './categorias/categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private categoriaUrl = 'localhost:3000/categorias';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getCategorias (): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.categoriaUrl).pipe(
      tap(_ => console.log('fetched heroes')),
      catchError(this.handleError<Categoria[]>('getHeroes', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
