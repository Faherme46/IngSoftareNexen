import { Component } from '@angular/core';
import { HistorialService } from 'src/app/services/historial.service';
import { Action } from 'src/app/interfaces/nxen';

@Component({
  selector: 'app-seguridad',
  standalone: true,
  imports: [],
  templateUrl: './seguridad.component.html',
  styleUrl: './seguridad.component.scss'
})
export class SeguridadComponent {
  solicitud:any
  action:any;

  processPayment(){
    console.log('process')
    const action={
      id:null,
      idUser: 1,
      fecha_h: '30-07-2024',
      servicio: 'Suscripcion a Servicio de Seguridad',
      id_ser: '0',
      valor: 150000,
    }

    this.historialService.createAction(action).subscribe(()=>{})


  }

  constructor(private historialService: HistorialService){}
}
