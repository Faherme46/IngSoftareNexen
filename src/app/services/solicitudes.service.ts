import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Solicitud} from 'src/app/interfaces/nxen'
import { HistorialService } from './historial.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {


  private apiUrl = 'http://localhost:3000/api/solicitudes';

  constructor(private http: HttpClient,private historialService:HistorialService) {}

  getSolicitudes(): Observable<Solicitud[]> {
    return this.http.get<Solicitud[]>(this.apiUrl);
  }

  getSolicitud(id: number): Observable<Solicitud> {
    return this.http.get<Solicitud>(`${this.apiUrl}/${id}`);
  }

  createSolicitud(solicitud: Solicitud): Observable<Solicitud> {

    this.sendAction(solicitud)

    return this.http.post<Solicitud>(this.apiUrl, solicitud);
  }

  sendAction(solicitud:any){
    const mensaje=solicitud.nameCar
    const action={
      id:null,
      idUser: 1,
      fecha_h: '30-07-2024',
      servicio: mensaje,
      id_ser: '0',
      valor: 850000,
    }

    this.historialService.createAction(action).subscribe(()=>{})
  }

  updateSolicitud(id: number, solicitud: Solicitud): Observable<Solicitud> {

    return this.http.put<Solicitud>(`${this.apiUrl}/${id}`, solicitud);
  }

  autorizarSolicitud(id: number, solicitud: Solicitud): Observable<Solicitud> {
    solicitud.state='Autorizado';
    console.log(solicitud)
    return this.http.put<Solicitud>(`${this.apiUrl}/${id}`, solicitud);
  }
  denegarSolicitud(id: number, solicitud: Solicitud): Observable<Solicitud> {
    solicitud.state='Denegado';
    console.log(solicitud)
    return this.http.put<Solicitud>(`${this.apiUrl}/${id}`, solicitud);
  }

  deleteSolicitud(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

