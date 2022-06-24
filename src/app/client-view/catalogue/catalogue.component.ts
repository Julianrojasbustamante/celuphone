import { Component, OnInit } from '@angular/core';
import {CategoriaModel} from "../../models/categoria.model";
import {ProductoModel} from "../../models/producto.model";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  index: number | undefined;
  faSearch = faSearch;
  selectedCategoria: CategoriaModel | undefined;
  teclados:ProductoModel[] = [
    new ProductoModel(1, "TECLADO LOGITECH", 85000, "TECLADO GAMING LOGITECH G915 TKL MECANICO NEGRO RGB", "tecladoMecanico.jpg", 5, 1, ["teclado.png", "teclado-2.png"]),
    new ProductoModel(2, "TECLADO REDRAGON", 122000, "TECLADO REDRAGON K530W RGB BLANCO DRACONIC INALAMBRICO", "teclado.jpg", 7, 0, ["teclado.png", "teclado-2.png"])
  ];
  pcGamer:ProductoModel[] = [
    new ProductoModel(3, "AEROCOOL SI-5200", 1850000, "EQUIPO AEROCOOL SI-5200 AMD RYZEN 5 4650G", "tecladoMecanico.jpg", 5, 1, ["teclado.png", "teclado-2.png"]),
    new ProductoModel(4, "HALCON", 2200000, "EQUIPO HALCON SERIES FEARLESS AMD RYZEN 5 4650G", "teclado.jpg", 7, 0, ["teclado.png", "teclado-2.png"])
  ];
  portatil:ProductoModel[] = [
    new ProductoModel(5, "Portatil Msi Alpha", 2950000, "Portatil Msi Alpha 17 B5EEK Amd Ryzen 7 5800H Ssd 512 Nvme", "tecladoMecanico.jpg", 5, 1, ["teclado.png", "teclado-2.png"])
  ];
  productos:ProductoModel[] = [
    new ProductoModel(1, "Teclado Mecanico", 85000, "Teclado gamer de tipo mecanico...", "tecladoMecanico.jpg", 5, 1, ["teclado.png", "teclado-2.png"]),
    new ProductoModel(2, "Teclado", 22000, "Teclado basico para funciones diarias...", "teclado.jpg", 7, 0, ["teclado.png", "teclado-2.png"])
  ];
  categorias:CategoriaModel[] = [
    new CategoriaModel(1, "Teclados", this.teclados),
    new CategoriaModel(2, "Pc gamer", this.pcGamer),
    new CategoriaModel(3, "Portatiles", this.portatil),
    new CategoriaModel(4, "Board", this.productos),
    new CategoriaModel(5, "Camara", this.productos),
    new CategoriaModel(6, "Capturadora", this.productos),
    new CategoriaModel(7, "Chasis", this.productos),
    new CategoriaModel(8, "Diademas", this.productos),
    new CategoriaModel(9, "Sillas", this.productos),
    new CategoriaModel(10, "Disipadores", this.productos),
    new CategoriaModel(11, "Discos Externos", this.productos),
    new CategoriaModel(12, "Parlante", this.productos),
    new CategoriaModel(13, "Impresoras", this.productos),
    new CategoriaModel(14, "Mouse", this.productos),
    new CategoriaModel(15, "Reguladores", this.productos),
  ];

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['categoria'];
    if (this.index != undefined)
      this.selectedCategoria = this.categorias[this.index - 1];
  }

  setSelectedCategoria(categoria: CategoriaModel) {
    this.selectedCategoria = categoria;
  }

  cleanSelectedCategoria() {
    // this.selectedCategoria = undefined;
    this.router.navigate(['catalogo']);
  }

  verProducto(id: number) {
    this.router.navigate(['producto', id]);
  }
}
