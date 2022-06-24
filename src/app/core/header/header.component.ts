import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email:string | undefined;
  password:string | undefined;
  constructor(
    private router:Router
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

  mostrarModalRegistro() {
    this.router.navigate(['registro']);
  }

  login(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;

  }
}
