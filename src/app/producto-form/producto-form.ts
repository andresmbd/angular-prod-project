import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-producto-form',
  imports: [FormsModule],
  templateUrl: './producto-form.html',
  styleUrl: './producto-form.css',
})
export class ProductoForm {
  // representa el estado inicial del form
  nombre = "";
  descripcion = "";
  precio = 0.0;
  stock = 0;

  crearProducto(){
    const producto = {
      nombre: this.nombre,
      descripcion: this.descripcion,
      precio: this.precio,
      stock: this.stock
    }
    console.log(producto);
  }
  

}
