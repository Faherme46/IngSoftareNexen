import { Injectable } from '@angular/core';
import { HttpClient,HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loader } from '@googlemaps/js-api-loader';
@Injectable({
  providedIn: 'root'
})
export class DistanceMatrixService {

  private apiKey = 'AIzaSyBxdOi8ryyZlbStb_3q4TavtWqwi978luo';
  private apiUrl = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json';


  constructor(private http: HttpClient) { }

  getMap(){
    const loader = new Loader({
      apiKey: "YOUR_API_KEY",
      version: "weekly",
    });
  }

  getDistances(origins: string, destinations: string): Observable<any> {
    const url = `${this.apiUrl}?destinations=${destinations}&origins=${origins}&key=${this.apiKey}`;
    return this.http.get(url);
  }




}
