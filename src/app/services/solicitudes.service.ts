import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Solicitud} from 'src/app/interfaces/nxen'

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {


  private apiUrl = 'http://localhost:3000/api/solicitudes';

  constructor(private http: HttpClient) {}

  getSolicitudes(): Observable<Solicitud[]> {
    return this.http.get<Solicitud[]>(this.apiUrl);
  }

  getSolicitud(id: number): Observable<Solicitud> {
    return this.http.get<Solicitud>(`${this.apiUrl}/${id}`);
  }

  createSolicitud(solicitud: Solicitud): Observable<Solicitud> {

    return this.http.post<Solicitud>(this.apiUrl, solicitud);
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

