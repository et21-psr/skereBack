import { Component, OnInit } from '@angular/core';
import { Categoria } from '../Clases/Clases';
import { CategoriasService } from '../servicios/categorias.service';
import { DebugService } from '../servicios/debug.service'
import { PosteoComponent } from '../posteo/posteo.component';
import { PosteoService } from '../servicios/posteo.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias: Categoria[];
  categoria_select: number;
  constructor(private servicio: CategoriasService, private DebugService: DebugService, private Posteo: PosteoComponent, private servicioPosteos: PosteoService) { }

  ngOnInit() {
    this.getCategoria();
  }

  getCategoria(): void {
    this.servicio.getCategoria()
      .subscribe(categorias => this.categorias = categorias);
    this.Debug("Servicio Categorias OK!");

  }

  CategoriaSelect(event: any) {
    this.categoria_select = event.target.value
  }
  Debug(message: string) {
    this.DebugService.add(`DebugService: ${message}`);
  }
}
