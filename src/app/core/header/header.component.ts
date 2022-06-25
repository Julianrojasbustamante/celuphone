import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {DataServices} from "../../services/data.services";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faCartShopping = faCartShopping;
  email:string | undefined;
  password:string | undefined;
  token: string | null | undefined;
  constructor(
    private router:Router,
    private service:DataServices
  ) { }

  ngOnInit(): void {
  }

  verCatalogo() {
    this.router.navigate(['catalogo']);
  }

  verSobreNosotros() {
    this.router.navigate(['sobre-nosotros']);
  }

  verInicio() {
    this.router.navigate(['inicio']);
  }

  verCarritoCompras() {
    this.router.navigate(['carrito-compras']);
  }

  mostrarModalRegistro() {
    this.router.navigate(['registro']);
  }

  login(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;
    this.token = "sa";
    // this.router.navigate(['registro']);
    // this.service.login(email, password);
    // this.token = this.service.getIDtoken();
  }

  cerrarSesion() {
    this.token = null;
  }
}
