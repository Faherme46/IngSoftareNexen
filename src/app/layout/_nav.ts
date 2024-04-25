import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Vehiculos',
    url: '/theme/colors',
    iconComponent: { name: 'car' }
  },
  {
    name: 'Drones',
    url: '/theme/typography',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: '1',
        url: '/base/accordion',
        icon: 'nav-icon-bullet'
      },
      {
        name: '2',
        url: '/base/accordion',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  { name: 'Robots',
    url: '/base',
    iconComponent: { name: 'cil-walk' },
    children: [
      {
        name: '1',
        url: '/base/accordion',
        icon: 'nav-icon-bullet'
      },
      {
        name: '2',
        url: '/base/accordion',
        icon: 'nav-icon-bullet'
      }
    ]
  }
];
