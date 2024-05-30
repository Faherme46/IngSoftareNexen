import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { VehiclesService } from 'src/app/services/vehicles.service';
import {DatosService} from 'src/app/services/datos.service';

@Component({
  selector: 'app-vehiculos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './vehiculos.component.html',
  styleUrl: './vehiculos.component.scss'
})
export class VehiculosComponent implements OnInit {

  vehicles:any[]=[]

  constructor(private router: Router,private vehicleService:VehiclesService,private datosService:DatosService){

  }

  ngOnInit(): void {
    this.loadVehicles()
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
