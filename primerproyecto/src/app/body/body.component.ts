import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  contactos = [];
  contactoNuevo = {
    placa: "",
    modelo: "",
    color: "",
    chasis: ""
  };
  constructor() {
  }

  ngOnInit() {
    this.crearContacto("PBQ9224", "aveo activo", "Rojo", "8LABD3562B0085261");
    this.crearContacto("PVC4859", "corsa 96", "Azul", "9ASRD3562B0085261");
  }

  crearContacto(placa: string, modelo: string, color: string, chasis: string) {
    let contacto = {
      placa: "",
      modelo: "",
      color: "",
      chasis: ""
    };
    contacto.placa = placa;
    contacto.modelo = modelo;
    contacto.color = color;
    contacto.chasis = chasis;
    this.contactos.push(contacto);
  }
}
