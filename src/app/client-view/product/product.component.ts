import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductoModel} from "../../models/producto.model";
import {DataServices} from "../../services/data.services";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  index: number | undefined;
  selectedProduct: ProductoModel | undefined;
  productos:ProductoModel[] = [];
  constructor(
    private route:ActivatedRoute,
    private dataService:DataServices
  ) { }

  setProductos(productos:ProductoModel[]){
    this.productos = productos;
  }

  ngOnInit(): void {
    this.obtenerProductos();
    this.index = this.route.snapshot.params['id'];
    this.obtenerProducto();
  }

  obtenerProductos(){
    this.dataService.cargarProductos().subscribe(
      (productos:ProductoModel[]) => {
        this.productos = productos;
        this.setProductos(productos);
      }
    );
  }

  guardarProductos(){
    this.dataService.guardarProductos(this.productos);
  }

  obtenerProducto() {
    if (this.index != undefined)
      this.dataService.obtenerProducto(this.index - 1).subscribe(
        (producto:ProductoModel) => {
          this.selectedProduct = producto;
        }
      );
      // this.selectedProduct = this.productos[this.index - 1];
  }
}
