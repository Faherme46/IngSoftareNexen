import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Services',
    },
    children: [
      {
        path: '',
        redirectTo: 'vehiculos',
        pathMatch: 'full'
      },
      {
        path: 'alertas',
        loadComponent: () =>
          import('./alertas/alertas.component').then((m) => m.AlertasComponent),
        data: {
          title: 'Alertas',
        },
      },
      {
        path: 'domicilios',
        loadComponent: () =>
          import('./domicilios/domicilios.component').then((m) => m.DomiciliosComponent),
        data: {
          title: 'Domicilios',
        },
      },
      {
        path: 'seguridad-oferta',
        loadComponent: () =>
          import('./seguridad-oferta/seguridad.component').then((m) => m.SeguridadComponent),
        data: {
          title: 'seguridad',
        },
      },
      {
        path: 'monitoreo',
        loadComponent: () =>
          import('./monitoreo/monitoreo.component').then((m) => m.MonitoreoComponent),
        data: {
          title: 'seguridad',
        },
      },
      {
        path: 'vehiculos',
        loadComponent: () =>
          import('./vehiculos/vehiculos.component').then((m) => m.VehiculosComponent),
        data: {
          title: 'Vehiculos',
        },
      },
    ],
  },
];
