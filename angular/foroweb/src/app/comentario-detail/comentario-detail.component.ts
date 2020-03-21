import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComentarioService } from '../servicios/comentario.service';
import { Comentario } from '../Clases/Clases';
import * as moment from 'moment';

@Component({
  selector: 'app-comentario-detail',
  templateUrl: './comentario-detail.component.html',
  styleUrls: ['./comentario-detail.component.css']
})
export class ComentarioDetailComponent implements OnInit {
  comentario : Comentario;
  idcomentario;
  constructor(
    private route: ActivatedRoute,
    private comentarioService: ComentarioService) { }

  ngOnInit() {
    this.getComentario();
  }

  getComentario(): void {
    this.idcomentario = this.route.snapshot.paramMap.get('id');
    const id = this.route.snapshot.paramMap.get('id');
    this.comentarioService.getComentarioid(id)
      .subscribe(comentario => this.comentario = comentario);
  }
  fecha(a: string) {
    a = moment.utc(a).local().format('HH:mm:ss DD/MM/YYYY');
    a = moment().startOf('hour').fromNow();
    return a;
}
}
