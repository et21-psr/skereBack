import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Categoria } from '../categorias/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  getCategoria(): Observable<any>{
    return this.http.get('http://localhost:3000/jugo/');
    
  }
}
