import { CurrencyPipe, NgFor } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { VehiclesService } from 'src/app/services/vehicles.service';
import {Vehicle} from 'src/app/interfaces/nxen'

@Component({
  selector: 'app-new-vehicle',
  standalone: true,
  imports: [NgFor,CurrencyPipe,FormsModule],
  templateUrl: './new-vehicle.component.html',
  styleUrl: './new-vehicle.component.scss'
})
export class NewVehicleComponent implements OnInit {
  vehicles: Vehicle[] = [];
  vehicle: Vehicle = { id: 0, name: '', description: '', price: 0, image: '',year:'' };
  isEditing = false;

  constructor(private vehicleService: VehiclesService) {}

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.vehicleService.getVehicles().subscribe(data => {
      this.vehicles = data;
    });
  }

  onSubmit(): void {
    if (this.isEditing) {
      this.vehicleService.updateVehicle(this.vehicle.id, this.vehicle).subscribe(() => {
        this.loadVehicles();
        this.resetForm();
      });
    } else {
      this.vehicleService.createVehicle(this.vehicle).subscribe(() => {
        this.loadVehicles();
        this.resetForm();
      });
    }
  }

  editVehicle(vehicle: Vehicle): void {
    this.vehicle = { ...vehicle };
    this.isEditing = true;
  }

  deleteVehicle(id: number): void {
    this.vehicleService.deleteVehicle(id).subscribe(() => {
      this.loadVehicles();
    });
  }

  resetForm(): void {
    this.vehicle = { id: 0, name: '', description: '', price: 0, image: '',year:'' };
    this.isEditing = false;
  }
}
