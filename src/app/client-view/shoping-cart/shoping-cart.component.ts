import { Component, OnInit } from '@angular/core';
import {DataServices} from "../../services/data.services";
import {Router} from "@angular/router";
import {ProductoModel} from "../../models/producto.model";
import Swal from'sweetalert2';
import {ProductoShopingCartModel} from "../../models/producto-shoping-cart.model";

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {
  productosCarrito: ProductoShopingCartModel[] = [
    new ProductoShopingCartModel(1, "TECLADO LOGITECH", 85000, "TECLADO GAMING LOGITECH G915 TKL MECANICO NEGRO RGB", 2),
    new ProductoShopingCartModel(1, "AEROCOOL SI-5200", 1850000, "EQUIPO AEROCOOL SI-5200 AMD RYZEN 5 4650G", 1),
  ];
  productos: ProductoModel[] | undefined;
  total = 0;
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

  calcularTotal(){
    this.total = 0;
    this.productosCarrito.forEach((producto) => {
      this.total += producto.precio * producto.cantidad;
    });
  }

  realizarPedido(){
    // this.dataService.guardarProductos(this.productos);
    this.calcularTotal();
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'mx-2 btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Estas seguro de realizar el pedido?',
      text: "El valor total de tu pedido es de: $" + this.total.toLocaleString(),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Tu pedido fue registrado exitosamente!',
          'Pronto uno de nuestros asesores se pondrá en contacto contigo para indicarte los medios de pago autorizados.',
          'success'
        )
        this.eliminarTodosLosProductos();
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Tu pedido no fue registrado',
          'error'
        )
      }
    })
  }

  eliminarTodosLosProductos(){
    this.productosCarrito.splice(0, this.productosCarrito.length);
  }

  eliminarProducto(producto:ProductoShopingCartModel) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'mx-2 btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Estas seguro de eliminar el producto '+ producto.nombre +' de tu carrito de compras?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'El producto fue eliminado exitosamente de tu carrito de compras!',
          '',
          'success'
        )
        this.quitarProducto(producto);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Tu pedido no fue eliminado de tu carrito de compras',
          'error'
        )
      }
    })
  }

  quitarProducto(producto: ProductoShopingCartModel){
    var counter = 0;
    this.productosCarrito?.forEach(
      (product) =>{
        if (product.id == producto.id)
          this.productosCarrito?.splice(counter, 1);
        counter ++;
      }
    );
  }

  verCatalogo() {
    this.route.navigate(["/catalogo"]);
  }
}
