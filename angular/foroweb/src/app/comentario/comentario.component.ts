import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Comentario } from '../Clases/Clases';
import { ActivatedRoute } from '@angular/router';
import { ComentarioService } from '../servicios/comentario.service';
import { DebugService } from '../servicios/debug.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit, OnChanges {
  @Input('id_posteo')id_posteo :number;
  comentarios : Comentario[];
  constructor(private servicio : ComentarioService,  private DebugService : DebugService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getComentario(this.route.snapshot.paramMap.get('id'));
  }
  ngOnChanges(changes: SimpleChanges ){
    this.getComentario(this.id_posteo);
  }  
  getComentario(id): void {
    this.servicio.getComentarioPosteo(id)
        .subscribe(comentario => this.comentarios = comentario);
    this.Debug("Servicio Comentarios OK!");
  }
  Debug(message: string){
    this.DebugService.add(`DebugService: ${message}`);
  }
}
