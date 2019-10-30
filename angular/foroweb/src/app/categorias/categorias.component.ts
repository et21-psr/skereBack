import { Component, OnInit } from '@angular/core';
import { Categoria } from '../Clases/Clases';
import { CategoriasService } from '../servicios/categorias.service';
import { DebugService } from '../servicios/debug.service'

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias : Categoria[];
  constructor(private servicio: CategoriasService, private DebugService : DebugService) { }

  ngOnInit() {
    this.getCategoria();
  }

  getCategoria(): void {
    this.servicio.getCategoria()
        .subscribe(categorias => this.categorias = categorias);
    console.log(this.categorias);
    this.Debug("Servicio Categorias OK!");
    
  }
  Debug(message: string){
    this.DebugService.add(`DebugService: ${message}`);
  }
}
