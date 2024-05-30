import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Action } from '../interfaces/nxen';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {


  private apiUrl = 'http://localhost:3000/api/actions';  // Cambia la URL según tu configuración

  constructor(private http: HttpClient) { }

  getActions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createAction(Action: Action): Observable<Action> {
    return this.http.post<Action>(this.apiUrl, Action);
  }

  getDate():String{
    
    const currentDate = new Date();
    return  currentDate.toISOString().split('T')[0];
  }



}
