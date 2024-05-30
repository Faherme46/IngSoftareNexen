import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { VehiclesService } from 'src/app/services/vehicles.service';
import {DatosService} from 'src/app/services/datos.service';
import { Solicitud } from 'src/app/interfaces/nxen';
import { SolicitudesService } from 'src/app/services/solicitudes.service';

@Component({
  selector: 'app-vehiculos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './vehiculos.component.html',
  styleUrl: './vehiculos.component.scss'
})
export class VehiculosComponent implements OnInit {
  solicitudes:Solicitud[]=[]

  vehicles:any[]=[]

  constructor(private solicitudesService:SolicitudesService,private router: Router,private vehicleService:VehiclesService,private datosService:DatosService){

  }
  loadSolicitudes(): void {
    this.solicitudesService.getSolicitudes().subscribe(data => {
      this.solicitudes = data;
    });

  }

  ngOnInit(): void {
    this.loadVehicles()
    this.loadSolicitudes()
  }
  navigateTo(id:any): void {
    this.enviar(id)
    this.router.navigate(['services/pagos']);
  }

  loadVehicles(): void {
    this.vehicleService.getVehicles().subscribe(
      data => {
        this.vehicles = data;
        console.log('Vehicles loaded:', this.vehicles);
      },
      error => {
        console.error('Error loading vehicles:', error);
      }
    );
  }

  enviar(dato:any): void {
    this.datosService.enviarDatos(dato);
    this.datosService.enviarTipo('v')
  }




}
