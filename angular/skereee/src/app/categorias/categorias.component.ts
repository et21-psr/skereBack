import { Component, OnInit } from '@angular/core';
import { CategoriasService} from '../categorias.service';
import { Categoria } from './categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias : Categoria[];

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit() {
    this.getCategorias();
  }

  getCategorias(): void {
    this.categoriasService.getCategorias()
    .subscribe(categorias => this.categorias = categorias);
  }
}
