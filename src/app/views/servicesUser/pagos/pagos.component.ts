import { Component, OnInit } from '@angular/core';
import { Vehicle, VehiclesService } from 'src/app/services/vehicles.service';

import {DatosService} from 'src/app/services/datos.service';
@Component({
  selector: 'app-pagos',
  standalone: true,
  imports: [],
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.scss'
})
export class PagosComponent implements OnInit {
  v:boolean=true;

  vehicles:any[]=[];
  vehicle:any;
  myId:number=1;
  processPayment(){

  }
  constructor(private vehicleService:VehiclesService,private datosService:DatosService){}

  ngOnInit(): void {

    this.loadVehicles()
    this.recibirTipo()
    // console.log('asda')
    // console.log(this.vehicle)

  }

  searchItem(id:number,v:any):void{
    this.vehicles.forEach(element => {
      if (element.id==id){
        console.log(element)
        this.vehicle=element

      }
    });
  }

  loadVehicles(): void {
    this.vehicleService.getVehicles().subscribe(
      data => {
        this.vehicles = data;
        console.log('Vehicles loaded:', this.vehicles);
        this.searchItem(this.myId,data)
      },
      error => {
        console.error('Error loading vehicles:', error);
      }
    );
  }

  recibir(){
    this.datosService.obtenerDatos().subscribe(data => {
      this.myId = parseInt(data);
    });
  }

  recibirTipo(){
    var tipo:any
    this.datosService.obtenerTipo().subscribe(data => {
      tipo = data;
      switch (tipo) {
        case 'v':
          this.v=false
          break;

        default:
          break;
      }

    });


  }




}













