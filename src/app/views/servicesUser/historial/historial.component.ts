import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Action } from 'src/app/interfaces/nxen';
import{HistorialService} from 'src/app/services/historial.service'

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [NgFor,NgIf,CurrencyPipe],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.scss'
})
export class HistorialComponent implements OnInit {
  actions: any[] = [];

  constructor(private historialService: HistorialService) { }

  ngOnInit(): void {
    this.loadActions()
  }


  loadActions(){
    this.historialService.getActions().subscribe(data => {
      this.actions = data;
    }, error => {
      console.error('Error fetching actions', error);
    });
  }

}
