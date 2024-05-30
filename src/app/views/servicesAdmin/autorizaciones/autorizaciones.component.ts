
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {SolicitudesService} from 'src/app/services/solicitudes.service'
import { CurrencyPipe } from '@angular/common';
import { VehiclesService } from 'src/app/services/vehicles.service';
import {Solicitud,Vehicle} from 'src/app/interfaces/nxen'
import { forEach } from 'lodash-es';
import { elements } from 'chart.js';
@Component({
  selector: 'app-autorizaciones',
  templateUrl: './autorizaciones.component.html',

  styleUrls: ['./autorizaciones.component.scss'],
  standalone: true, // Define el componente como independiente
  imports:[NgFor,CurrencyPipe],

})
export class AutorizacionesComponent {
  solicitudes:Solicitud[]=[]
  vehicles:Vehicle[]=[]
  

  constructor(private solicitudesService:SolicitudesService,private vService:VehiclesService){
    this.loadSolicitudes()
    this.loadVehicles()
  }

  loadSolicitudes(): void {
    this.solicitudesService.getSolicitudes().subscribe(data => {
      this.solicitudes = data;
    });

  }
  loadVehicles(): void {
    this.vService.getVehicles().subscribe(data => {
      this.vehicles = data;
    });
  }

  getAutorizaciones() {
    return this.solicitudes;
  }

  getCar(idCar:any){
    var name=''
    this.vehicles.forEach(element=>{
      if (element.id==idCar){
        name=element.name
      }
    })
    return name
  }

  autorizar(id:number,s:Solicitud){

    this.solicitudesService.autorizarSolicitud(id,s).subscribe(()=>{})
  }
  denegar(id:number,s:Solicitud){
    this.solicitudesService.denegarSolicitud(id,s).subscribe(()=>{})
  }
}
