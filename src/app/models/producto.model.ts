import {ImagenModel} from "./imagen.model";

export class ProductoModel{
  id:number;
  nombre:string;
  precio:number;
  descripcion:string;
  imagenPrincipal:string;
  imagenes?:ImagenModel[];
  unidadesDisponibles:number;
  estado:number;

  constructor(id: number, nombre: string, precio: number, descripcion: string, imagenPrincipal: string, unidadesDisponibles: number, estado: number) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.imagenPrincipal = imagenPrincipal;
    this.unidadesDisponibles = unidadesDisponibles;
    this.estado = estado;
  }
}
