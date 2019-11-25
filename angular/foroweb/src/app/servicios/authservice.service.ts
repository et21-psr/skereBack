import { Injectable } from '@angular/core';
import { Usuario } from '../Clases/Clases';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  AUTH_SERVER: string = 'http://localhost:3000/usuario/';
  AUTH_SERVER2: string = 'http://localhost:3000/usuario/login';
  idusuario: string;
  authSubject = new BehaviorSubject(false);
  private token: string;
  constructor(private httpClient: HttpClient) { }

  register(user: Usuario):  Observable <Usuario>{
    return this.httpClient.post<Usuario>(this.AUTH_SERVER,
      user).pipe(tap(
        (res: Usuario) => {
          if(res){
          }
        })
      );
    }

  login(user: Usuario):  Observable <Usuario>{
    return this.httpClient.post<Usuario>(this.AUTH_SERVER2,
      user).pipe(tap(
        (res: Usuario) => {
          if(res){
            //guardar datos
            this.saveIdusuario(res.id_usuario)
          }
        })
      );
    }

  logout(): void {
    this.idusuario = '';
    localStorage.removeItem("IDUSUARIO");
  }

  private saveIdusuario(id_usuario: string): void{
    localStorage.setItem("IDUSUARIO", id_usuario);
    this.idusuario = id_usuario;
  }

  private getIdusuario(): string {
    if(!this.idusuario){
      this.idusuario = localStorage.getItem("IDUSUARIO");
    }
    return this.idusuario;
  }
}
  
