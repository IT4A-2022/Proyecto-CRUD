import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-venta',
  templateUrl: './create-venta.component.html',
  styleUrls: ['./create-venta.component.css']
})
export class CreateVentaComponent implements OnInit {
  createVenta: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.createVenta = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      opcion: ['', Validators.required],
      kilos: ['', Validators.required],
      precio: ['', Validators.required],
      total: ['', Validators.required],
      fecha: ['', Validators.required],
      telefono: ['', Validators.required],
      forma: ['', Validators.required],
      estatus: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregarVenta() {
    console.log(this.createVenta)
  }
}
