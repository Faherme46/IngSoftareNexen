import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  private vehicles = [
    { name: 'Carro negro', status: 'Available', lat:7.08,lng: -73.1 },
    { name: 'Camioncito', status: 'In Use', lat: 40.730610, lng:-73.935242 },
    { name: 'Moto roja', status: 'Maintenance', lat :45.730610, lng:-78.935242 }
  ];

  getVehicles(): Observable<any[]> {
    return of(this.vehicles);
  }
}
