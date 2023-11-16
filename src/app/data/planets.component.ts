// src/app/data.component.ts

import { Component, AfterViewInit } from '@angular/core';
import { PlanetsService } from './planets.service';

@Component({
  selector: 'app-planets',
  styleUrls: ['../app.component.css'], 
  templateUrl: './planets.component.html',
})
export class PlanetsComponent implements AfterViewInit {
  planets$ = this.planetsService.getVehicles();

  constructor(private planetsService: PlanetsService) {}

  ngAfterViewInit(): void {}

  fetchPeople(): void {
    this.planetsService.getVehicles();
  }


    // Function to determine the row color dynamically
    getRowColor(index: number): string {
        return index % 2 === 0 ? 'even-row' : 'odd-row';
      }
}