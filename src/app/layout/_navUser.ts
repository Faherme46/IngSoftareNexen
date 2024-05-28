import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Alquilar Vehiculo',
    url: '/services/vehiculos',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Solicitar Domicilio',
    url: '/services/domicilios',
    // iconComponent: { name: 'car' }
  },
  {
    name: 'Servicios de seguridad',
    url: '/services/seguridad',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Servicios',
        url: '/services/seguridad-oferta',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Monitoreo',
        url: '/services/monitoreo',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  { name: 'Alertas de Panico',
    url: '/services/alertas',
    iconComponent: { name: 'cil-walk' },
  }
];
