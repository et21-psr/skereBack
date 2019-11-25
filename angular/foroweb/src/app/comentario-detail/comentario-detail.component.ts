import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComentarioService } from '../servicios/comentario.service';
import { Comentario } from '../Clases/Clases';

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
}
