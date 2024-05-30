import { Component, OnInit,ViewChild } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

import { FormsModule } from '@angular/forms';
import {VehiclesService} from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-monitor',
  standalone: true,
  imports: [NgFor,NgClass,FormsModule],
  templateUrl: './monitoreo.component.html',
  styleUrls: ['./monitoreo.component.scss'],
})
export class MonitoreoComponent implements OnInit {



  latitude = 37.7749; // Coordenadas iniciales (por ejemplo, San Francisco)
  longitude = -122.4194;
  map!: google.maps.Map  ;
  marker: google.maps.Marker = new google.maps.Marker();
  filteredVehicles: any[] = [];
  searchTerm: string = '';
  vehicles: any[] =  [
    { name: 'Vehicle 1', lat: 40.730610, lng: -73.935242 },
    { name: 'Vehicle 2', lat: 34.052235, lng: -118.243683 },
    { name: 'Vehicle 3', lat: 37.774929, lng: -122.419416 }
  ];




  constructor(private vehicleService: VehiclesService) {}

  ngOnInit(): void {
    this.loadVehicles();
    this.initMap();
  }

  loadVehicles(): void {
    this.vehicleService.getMyVehicles().subscribe(data => {
      this.vehicles = data;
      this.filteredVehicles = data; // Inicialmente, mostrar todos los vehículos
    });
  }
  initMap(): void {
    const initialLocation = {lat:7.08,lng: -73.1 }; // San Francisco, CA
    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      zoom: 8,
      center: initialLocation
    });
    this.marker = new google.maps.Marker({
      position: initialLocation,
      map: this.map,
      title: 'Initial Location'
    });

    this.marker.setLabel('Carro negro')
  }

  filterVehicles(): void {
    if (this.searchTerm) {
      this.filteredVehicles = this.vehicles.filter(vehicle =>
        vehicle.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      if (this.filteredVehicles){

      }
    } else {
      this.filteredVehicles = this.vehicles;
    }
  }


  sonarAlarma(): void {
    const myModal = document.getElementById('myModal')
    const myInput = document.getElementById('myInput')
    if (myModal && myInput){
      myModal.style.display='block';
      myModal.addEventListener('shown.bs.modal', () => {
        myInput.focus()
      })
    }
  }

  alertarRobo(): void {

  }

  solicitarAsistencia(): void {

  }
  rastrear(lat: number, lng: number,name:string): void {
    console.log(lat)
    // Simulación de rastreo: Cambiar la ubicación en el mapa
    const newLocation = { lat, lng };
    if (this.map) {
      this.map.setCenter(newLocation);
      this.marker.setPosition(newLocation);
      this.marker.setLabel(name)
    }
  }


}
