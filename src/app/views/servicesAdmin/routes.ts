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
    ],
  },
];


