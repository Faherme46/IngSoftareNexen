import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'admin',
    },
    children: [
      {
        path: '',
        redirectTo: 'autorizar',
        pathMatch: 'full'
      },
      {
        path: 'autorizar',
        loadComponent: () =>
          import('./autorizaciones/autorizaciones.component').then((m) => m.AutorizacionesComponent),
        data: {
          title: 'Autorizar',
        },
      },
      {
        path: 'new-vehicle',
        loadComponent: () =>
          import('./new-vehicle/new-vehicle.component').then((m) => m.NewVehicleComponent),
        data: {
          title: 'Nuevo Vehiculo',
        },
      },
    ],
  },
];


