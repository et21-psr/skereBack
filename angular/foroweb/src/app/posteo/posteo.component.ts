import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Posteo, Categoria, crearposteo } from '../Clases/Clases';
import { DebugService } from '../servicios/debug.service'
import { PosteoService } from '../servicios/posteo.service';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-posteo',
  templateUrl: './posteo.component.html',
  styleUrls: ['./posteo.component.css']
})
export class PosteoComponent implements OnInit, OnChanges {
  posteos : Posteo[];
  crearposteo: crearposteo;
  @Input('id_categoria')id_categoria :number;
  @Input('categorias')categorias :Categoria[];
  constructor(private servicio : PosteoService, private DebugService : DebugService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPosteo(this.route.snapshot.paramMap.get('id'));
  }

  ngOnChanges(changes: SimpleChanges ){
    this.getPosteo(this.id_categoria);
  }  
  getPosteo(id): void {
    this.servicio.getPosteoCategoria(id)
        .subscribe(posteos => this.posteos = posteos);
    this.Debug("Servicio Posteos OK!");
    
  }
  onCreate(form):void{
    this.crearposteo = form.value; 
    this.servicio.register(this.crearposteo).subscribe((res => {}))
  }
  registrado(){
    return localStorage.getItem("IDUSUARIO");
  }
  Debug(message: string){
    this.DebugService.add(`DebugService: ${message}`);
  }

}
