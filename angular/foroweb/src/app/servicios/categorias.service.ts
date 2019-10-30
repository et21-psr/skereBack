import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { DebugService } from './debug.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient, private Debug: DebugService) { }

  getCategoria(): Observable<any>{
    this.log("OK!");
    return this.http.get('http://localhost:3000/categoria/');
    
  }

  private log(message: string) {
    this.Debug.add(`CategoriaService: ${message}`);
  }
}
