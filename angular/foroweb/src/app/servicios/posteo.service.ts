import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { DebugService } from './debug.service';
import { Posteo, crearposteo } from '../Clases/Clases';

@Injectable({
  providedIn: 'root'
})
export class PosteoService {

  Url = 'http://localhost:3000/posteo';
  Url2 = 'http://localhost:3000/posteo/categoria';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private Debug: DebugService) { }

  getPosteo(): Observable<any>{
    this.log("OK!");
    return this.http.get(this.Url);
    
  }

  getPosteoCategoria(id: string): Observable<Posteo[]> {
    if(id){
    const url = `${this.Url2}/${id}`;
    return this.http.get<Posteo[]>(url).pipe(
      tap(_ => this.log(`fetched posteo id=${id}`)),
      catchError(this.handleError<Posteo[]>(`getPosteo id=${id}`))
    );}
    else{return this.http.get<Posteo[]>(this.Url);}
  }

  getPosteoid(id: string): Observable<Posteo> {
    const url = `${this.Url}/${id}`;
    return this.http.get<Posteo>(url).pipe(
      tap(_ => this.log(`fetched posteo id=${id}`)),
      catchError(this.handleError<Posteo>(`getPosteo id=${id}`))
    );
  }

  register(user: crearposteo):  Observable <crearposteo>{
    user.usuarioId = localStorage.getItem("IDUSUARIO");
    return this.http.post<crearposteo>(this.Url,
      user).pipe(tap(
        (res: crearposteo) => {
          if(res){
          }
        })
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

  /* GET posteos whose name contains search term */
  searchPosteos(term: string): Observable<Posteo[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Posteo[]>(`${this.Url}/titulo/${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Posteo[]>('searchHeroes', []))
    );
  }
}
