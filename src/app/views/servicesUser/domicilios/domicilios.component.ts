import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Loader } from '@googlemaps/js-api-loader';
import { DistanceMatrixService } from 'src/app/services/distance-matrix.service';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-domicilios',
  standalone: true,
  imports: [HttpClientModule, NgIf, NgFor],
  templateUrl: './domicilios.component.html',
  styleUrl: './domicilios.component.scss',
})
export class DomiciliosComponent implements OnInit {
  distances: any;
  data2: any;
  constructor(private distanceMatrixService: DistanceMatrixService) {}

  ngOnInit(): void {
    const origins = '7.08,-73.1';
    const destinations = '40.659569,-73.933783';
    this.distanceMatrixService.getDistances(origins, destinations).subscribe(
      (data) => {
        this.distances = data;
        console.log(this.distances);
      },
      (error) => {
        console.error('Error:', error);
      }
    );

    this.loadMap()
  }

  async loadMap() {
    // The location of Uluru
    const position = { lat:7.08,lng: -73.1 };

    // Request needed libraries.
    //@ts-ignore
    const { Map } = (await google.maps.importLibrary(
      'maps'
    )) as google.maps.MapsLibrary;
    const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      'marker'
    )) as google.maps.MarkerLibrary;

    // The map, centered at Uluru
    const map = new Map(document.getElementById('map') as HTMLElement, {
      zoom: 4,
      center: position,
      mapId: 'DEMO_MAP_ID',
    });
  }
}
