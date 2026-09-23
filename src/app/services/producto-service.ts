import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ProductoService {
  /**
  * TypeScript hace dos cosas al mismo tiempo al poner un modificador de acceso en el constructor:
  * 1. Declara una propiedad/atributo llamada, en este caso http
  * 2. Recibe esa propiedad mediante el constructor (this.http = http;).
  */
 // forma abreviada de TypeScript llamada parameter property.
  constructor(private http: HttpClient){ // en TypeScript: una variable llamada http cuyo tipo es HttpClient.
  }
}
