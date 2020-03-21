import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Comentario } from '../Clases/Clases';
import { DebugService } from './debug.service';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  Url = 'http://localhost:3000/comentario/';
  Url2 = 'http://localhost:3000/comentario/posteo';
  Url3 = 'http://localhost:3000/comentario/comentario_padre';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, private Debug: DebugService) { }

  getComentarioPosteo(id: string): Observable<Comentario[]> {
    if(id){
    const url = `${this.Url2}/${id}`;
    return this.http.get<Comentario[]>(url).pipe(
      tap(_ => this.log(`fetched comentairo id=${id}`)),
      catchError(this.handleError<Comentario[]>(`getComentario id=${id}`))
    );}
    else{return this.http.get<Comentario[]>(this.Url);}
  }

  getComentarioPadre(id: string): Observable<Comentario[]> {
    if(id){
    const url = `${this.Url3}/${id}`;
    return this.http.get<Comentario[]>(url).pipe(
      tap(_ => this.log(`fetched comentairo id=${id}`)),
      catchError(this.handleError<Comentario[]>(`getComentario id=${id}`))
    );}
    else{return this.http.get<Comentario[]>(this.Url);}
  }

  getComentarioid(id: string): Observable<Comentario> {
    const url = `${this.Url}/${id}`;
    return this.http.get<Comentario>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Comentario>(`getPosteo id=${id}`))
    );
  }

  private log(message: string) {
    this.Debug.add(`UsuarioService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
