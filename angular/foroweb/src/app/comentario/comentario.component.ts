import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Comentario } from '../Clases/Clases';
import { ActivatedRoute } from '@angular/router';
import { ComentarioService } from '../servicios/comentario.service';
import { DebugService } from '../servicios/debug.service';
import * as moment from 'moment';
@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit, OnChanges {
  @Input('id_posteo')id_posteo :number;
  @Input('comentario_padre')comentario_padre :number;
  comentarios : Comentario[];
  constructor(private servicio : ComentarioService,  private DebugService : DebugService, private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.comentario_padre){
      this.getComentarioPadre(this.route.snapshot.paramMap.get('id'))  
    }
    else{
      this.getComentario(this.route.snapshot.paramMap.get('id'));
      ;
    }
  }
  ngOnChanges(changes: SimpleChanges ){
    if(this.comentario_padre){
      this.getComentarioPadre(this.route.snapshot.paramMap.get('id'))  
    }
    else{
      this.getComentario(this.route.snapshot.paramMap.get('id'));
      ;
    }
  }  
  getComentario(id): void {
    this.servicio.getComentarioPosteo(id)
        .subscribe(comentario => this.comentarios = comentario);
    this.Debug("Servicio Comentarios OK!");
  }
  getComentarioPadre(id): void {
    this.servicio.getComentarioPadre(id)
        .subscribe(comentario => this.comentarios = comentario);
    this.Debug("Servicio Comentarios OK!");
  }
  Debug(message: string){
    this.DebugService.add(`DebugService: ${message}`);
  }

  fecha(a: string) {
    a = moment.utc(a).local().format('HH:mm:ss DD/MM/YYYY');
    a = moment().startOf('hour').fromNow();
    return a;
}
}
