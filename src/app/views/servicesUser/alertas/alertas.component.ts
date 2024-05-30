import { Component } from '@angular/core';
import { HistorialService } from 'src/app/services/historial.service';

@Component({
  selector: 'app-alertas',
  standalone: true,
  imports: [],
  templateUrl: './alertas.component.html',
  styleUrl: './alertas.component.scss'
})
export class AlertasComponent {

  emergencia(serv:any){
    const mensaje='Llama a '+serv;
    const action={

      idUser: 1,
      fecha_h: '30-07-2024',
      servicio: mensaje,
      id_ser: 0,
      valor: 0,
    }
    this.sendAction(action)

  }
  constructor(private historialService: HistorialService){

  }

  getDate():String{
    const currentDate = new Date();
    return  currentDate.toISOString().split('T')[0];
  }

  sendAction(action:any){
    this.historialService.createAction(action).subscribe(()=>{})
  }



}
