import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private datos = new BehaviorSubject<string>('');
  private tipo = new BehaviorSubject<string>('');


  enviarDatos(data: string): void {
    this.datos.next(data);
  }

  enviarTipo(data: string): void {
    this.tipo.next(data);
  }

  obtenerDatos() {
    return this.datos.asObservable();
  }
  obtenerTipo() {
    return this.tipo.asObservable();
  }

}
