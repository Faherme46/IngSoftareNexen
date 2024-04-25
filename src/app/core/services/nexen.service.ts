import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteLista } from '../../interfaces/nxen';

@Injectable({
  providedIn: 'root'
})
export class NexenService {

  constructor(private https: HttpClient) { }

  /*GetUsuarioList(): Observable<ClienteLista> {
    return this.https.get<ClienteLista>(Urlbase)
  }*/
}
