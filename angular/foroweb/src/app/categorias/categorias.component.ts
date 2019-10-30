import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria';
import { CategoriasService } from '../servicios/categorias.service';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias : Categoria[];
  constructor(private servicio: CategoriasService) { }

  ngOnInit() {
    this.getCategoria();
  }

  getCategoria(): void {
    this.servicio.getCategoria()
        .subscribe(categorias => this.categorias = categorias);
    console.log(this.categorias);
    
  }
}
