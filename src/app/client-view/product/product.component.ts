import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductoModel} from "../../models/producto.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  index: number | undefined;
  selectedProduct: ProductoModel | undefined;
  productos:ProductoModel[] = [
    new ProductoModel(1, "TECLADO LOGITECH", 85000,
      "TECLADO GAMING LOGITECH G915 TKL MECANICO NEGRO RGB El G915 TKL dispone de tecnología inalámbrica LIGHTSPEED de calidad profesional con una vertiginosa rapidez de 1 ms. El G915 TKL también funciona perfectamente conectado mediante USB, lo que permite la carga y el uso simultáneos",
      "tecladoMecanico.jpg", 5, 1, ["teclado.png", "teclado-2.png"]),
    new ProductoModel(2, "TECLADO REDRAGON", 122000,
      "TECLADO REDRAGON K530W RGB BLANCO DRACONIC INALAMBRICO Redragon K530 Draconic Teclado mecánico inalámbrico 60% compacto RGB, 61 teclas Teclado para juegos Bluetooth 5.0 diseñado por TKL con interruptores marrones.El diseño ultra minimalista sin teclas (TKL) con 61 teclas de diseño portátil libera espacio en la mesa para el movimiento del mouse, lo que ofrece el rendimiento más puro para FPS pro.Disfruta de la libertad de la conectividad inalámbrica con una conexión Bluetooth 5.0 y una capacidad de batería de 3000 mAh de larga duración. Se conecta rápido y confiable sin problemas con dispositivos como computadoras portátiles, tabletas e incluso teléfonos que admiten Bluetooth.Cambie fácilmente entre los modos inalámbrico y cableado con el interruptor de modo en el lateral. El cable USB-C incluido te da la opción de conectarte para juegos competitivos.13 preajustes dinámicos disponibles a bordo. Millones de opciones de color y efectos de escritura reactivos lo convierten en el diseñador de su equipo definitivo con un controlador profesional. Enlace de descarga de controlador.",
      "teclado.jpg", 7, 0, ["teclado-red-dragon.png", "teclado-red-dragon-2.png"]),
    new ProductoModel(1, "AEROCOOL SI-5200", 1850000,
      "EQUIPO AEROCOOL SI-5200 AMD RYZEN 5 4650G -Chasis AeroCopl SI-5200\n" +
      "-3 ventiladores RGB frontales de 120mm\n" +
      "– Hasta 14 modos de iluminación: 7 efectos RGB Flow y 7 colores estáticos\n" +
      "– Soporte para refrigeración líquida frontal de hasta 240mm\n" +
      "– Panel lateral total para mostrar el interior de tu PC\n" +
      "– Diseño de cámara dual para maximizar la ventilación\n" +
      "– Filtro antipolvo inferior extraíble\n" +
      "Asus TUF B450M-PLUS Gaming\n" +
      "-Plataforma: AMD\n" +
      "-Capacidad máxima soportada de la memoria RAM: 64 GB\n" +
      "-Chipsets: Amd\n" +
      "-Socket: AM4\n" +
      "-Con procesador: No\n" +
      "-Tipo de memoria RAM: DDR4\n" +
      "-Es gamer: Sí\n" +
      "– Procesador : AMD RYZEN 5 4650G\n" +
      "-N.° de núcleos de CPU: 6\n" +
      "-N.° de subprocesos: 12\n" +
      "-Reloj de aumento máx. Hasta 4.2GHz\n" +
      "-TDP/TDP predeterminado: 65W\n" +
      "-Reloj base 3.7GHz\n" +
      "-Caché L3 total: 8MB\n" +
      "M.2 256 TEAM GROUP MP33 PRO PCI E",
      "tecladoMecanico.jpg", 5, 1, ["pc-gaming-aerocool.png", "pc-gaming-aerocool-2.png"]),
    new ProductoModel(2, "HALCON", 2200000,
      "Personaliza tu estilo, cambia el modo en que mueves tu mundo y no dejes perder esta gran oportunidad, porque hoy AMD trae un Equipo RYZEN 5 4650G. EQUIPO HALCON SERIES FEARLESS AMD RYZEN 5 4650G ESPECIFICACIONES \n" +
      "\n" +
      "Chasis Halcon series fearless\n" +
      "– Procesador : AMD RYZEN 5 4650G\n" +
      "-N.° de núcleos de CPU: 6\n" +
      "-N.° de subprocesos: 12\n" +
      "-Reloj de aumento máx. Hasta 4.2GHz\n" +
      "-TDP/TDP predeterminado: 65W\n" +
      "-Reloj base 3.7GHz\n" +
      "-Caché L3 total: 8MB\n" +
      "-Board Asus Prime A520M-A II\n" +
      "-Chipset: A520\n" +
      "-Ranuras de expansión: 1 x PCIe 3.0 x16 (x16 mode)\n" +
      "-Almacenamiento: Supports 1 x M.2 slot and 4 x SATA 6Gb/s ports\n" +
      "-Capacidad memoria ram: 128gb\n" +
      "-Velocidad de memoria del reloj: 2400 MHz\n" +
      "-Memoria xpg spectrix d41 de 8gb \n" +
      "-Capacidad: 8Gb\n" +
      "-Velocidad: 3200 GHz\n" +
      "-Formato: DIMM\n" +
      "-Tecnología: DDR4\n" +
      "-Disco estado solido western digital green 240GB M.2 SATA",
      "teclado.jpg", 7, 0, ["pc-gaming-halcon.png", "pc-gaming-halcon-2.png"]),
    new ProductoModel(3, "Portatil Msi Alpha", 2950000,
      "Portatil Msi Alpha 17 B5EEK Amd Ryzen 7 5800H Ssd 512 Nvme Emboscada en el punto más alto, con vistas al enemigo y a punto de marchar con fuerza, Alpha 17 está listo para encender el mundo de los juegos. Combinando el último procesador móvil AMD Ryzen ™ 7 5800H y los gráficos Radeon ™ RX 6600M juntos, Alpha 17 satisface la imaginación del jugador en los juegos.",
      "tecladoMecanico.jpg", 5, 1, ["portatil.png", "portatil-2.png"])
  ];
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    if (this.index != undefined)
      this.selectedProduct = this.productos[this.index - 1];
  }

}
