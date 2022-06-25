import { Component, OnInit } from '@angular/core';
import {DataServices} from "../../services/data.services";
import {Router} from "@angular/router";
import {ProductoModel} from "../../models/producto.model";
import Swal from'sweetalert2';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {

  productos: ProductoModel[] | undefined;
  confirmarPedido = false;
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
    this.productos?.forEach((producto) => {
      this.total += producto.precio;
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
        this.productos = undefined;
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

  eliminarProducto() {
    this.productos = undefined;
  }

  verCatalogo() {
    this.route.navigate(["/catalogo"]);
  }
}
