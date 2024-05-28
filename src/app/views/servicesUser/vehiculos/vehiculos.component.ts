import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehiculos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './vehiculos.component.html',
  styleUrl: './vehiculos.component.scss'
})
export class VehiculosComponent {

  constructor(private router: Router){

  }
  navigateTo(): void {
    this.router.navigate(['services/pagos']);
  }

  vehicles = [
    {
      id:'1',
      name: 'Honda Accord LX',
      model: 'Modelo 1',
      year: 2018,
      description: 'Descripción del vehículo 1.',
      price: '800.000',
      kms:13000,
      route:'pagos',
      imgUrl: 'https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC011A021001.jpg&width=440&height=262'
    },
    {
      id:'2',
      name: 'Honda CIVIC HATCHBACK LS',
      model: 'Modelo 2',
      year: 2017,
      description: 'Descripción del vehículo 2.',
      price: '820.000',
      kms:13000,
      route:'',
      imgUrl: 'https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=CAC80HOC021B121001.jpg&width=440&height=262'
    },
    {
      id:'3',
      name: 'Honda Accord Hybrid LT',
      model: 'Modelo 3',
      year: 2017,
      description: 'Descripción del vehículo 3.',
      price: '1.000.000',
      route:'',
      kms:13000,
      imgUrl: 'https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262'
    }
    // ... más vehículos
  ];
}
