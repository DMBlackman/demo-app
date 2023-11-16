// src/app/data.component.ts

import { Component, AfterViewInit } from '@angular/core';
import { VehiclesService } from './vehicles.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicles',
  styleUrls: ['../app.component.css'], 
  templateUrl: './vehicles.component.html',
})
export class VehiclesComponent implements AfterViewInit {
  vehicles$ = this.vehiclesService.getVehicles();
  keys$ = this.vehiclesService.getKeys();

  constructor(private vehiclesService: VehiclesService) {}

  ngAfterViewInit(): void {}

  fetchPeople(): void {
    this.vehiclesService.getVehicles();
  }


    // Function to determine the row color dynamically
    getRowColor(index: number): string {
        return index % 2 === 0 ? 'even-row' : 'odd-row';
      }
}