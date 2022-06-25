import { Component, OnInit } from '@angular/core';
import {DataServices} from "../../services/data.services";
import {Router} from "@angular/router";
import {ProductoModel} from "../../models/producto.model";

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {

  productos: ProductoModel[] | undefined;

  constructor(
    private service:DataServices,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.service.cargarProductos().subscribe(
      (productos:ProductoModel[]) => {
        this.productos = productos;
      }
    );
  }

  eliminarProducto() {
    this.productos = undefined;
  }
}
