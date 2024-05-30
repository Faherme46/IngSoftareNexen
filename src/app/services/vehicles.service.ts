import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Vehicle} from 'src/app/interfaces/nxen'

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  private vehicles = [
    { name: 'Carro negro', status: 'Available', lat:7.08,lng: -73.1 },
    { name: 'Camioncito', status: 'In Use', lat: 40.730610, lng:-73.935242 },
    { name: 'Moto roja', status: 'Maintenance', lat :45.730610, lng:-78.935242 }
  ];

  private apiUrl = 'http://localhost:3000/api/vehicles';

  constructor(private http: HttpClient) {}

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }

  getMyVehicles(): Observable<any[]> {
    return of(this.vehicles);
  }

  getVehicle(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.apiUrl}/${id}`);
  }

  getNameVehicle(id:number): Observable<String> {
    return this.http.get<String>(`${this.apiUrl}/name/${id}`);
  }

  createVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.apiUrl, vehicle);
  }

  updateVehicle(id: number, vehicle: Vehicle): Observable<Vehicle> {
    return this.http.put<Vehicle>(`${this.apiUrl}/${id}`, vehicle);
  }

  deleteVehicle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}


