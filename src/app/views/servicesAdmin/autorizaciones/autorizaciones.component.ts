// autorizaciones.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-autorizaciones',
  templateUrl: './autorizaciones.component.html',
  standalone:true,
  styleUrls: ['./autorizaciones.component.scss']
})
export class AutorizacionesComponent {
  autorizaciones = [
    { id: 1, name: 'Juan Pérez', email: 'juan.perez@example.com', profession: 'Ingeniero', rentalReason: 'Trabajo', rentalStartDate: '2024-06-01', rentalEndDate: '2024-06-10', carModel: 'Toyota' },
    { id: 2, name: 'María García', email: 'maria.garcia@example.com', profession: 'Médico', rentalReason: 'Turismo', rentalStartDate: '2024-06-05', rentalEndDate: '2024-06-15', carModel: 'Ford' },
    { id: 3, name: 'Carlos López', email: 'carlos.lopez@example.com', profession: 'Arquitecto', rentalReason: 'Otro', rentalStartDate: '2024-06-10', rentalEndDate: '2024-06-20', carModel: 'Honda' }
  ];
}
