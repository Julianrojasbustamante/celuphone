import { Component, OnInit } from '@angular/core';
import {CategoriaModel} from "../../models/categoria.model";
import {ProductoModel} from "../../models/producto.model";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  selectedCategoria: CategoriaModel | undefined;
  productos:ProductoModel[] = [
    new ProductoModel(1, "Teclado Mecanico", 85000, "Teclado gamer de tipo mecanico...", "tecladoMecanico.jpg", 5, 1),
    new ProductoModel(2, "Teclado", 22000, "Teclado basico para funciones diarias...", "teclado.jpg", 7, 0)
  ];
  categorias:CategoriaModel[] = [
    new CategoriaModel(1, "Teclados", this.productos),
    new CategoriaModel(2, "Pc gamer", this.productos),
    new CategoriaModel(2, "Portatiles", this.productos),
    new CategoriaModel(1, "Teclados", this.productos),
    new CategoriaModel(2, "Pc gamer", this.productos),
    new CategoriaModel(2, "Portatiles", this.productos),
    new CategoriaModel(1, "Teclados", this.productos),
    new CategoriaModel(2, "Pc gamer", this.productos),
    new CategoriaModel(2, "Portatiles", this.productos),
    new CategoriaModel(1, "Teclados", this.productos),
    new CategoriaModel(2, "Pc gamer", this.productos),
    new CategoriaModel(2, "Portatiles", this.productos),
    new CategoriaModel(1, "Teclados", this.productos),
    new CategoriaModel(2, "Pc gamer", this.productos),
    new CategoriaModel(2, "Portatiles", this.productos),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedCategoria(categoria: CategoriaModel) {
    this.selectedCategoria = categoria;
  }

  cleanSelectedCategoria() {
    this.selectedCategoria = undefined;
  }
}