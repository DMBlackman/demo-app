// src/app/app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'], 
  template: `
    <h1>Demo App</h1>
    <br>
    <app-data></app-data>
    <br>
    <app-vehicles></app-vehicles>
    <br>
    <app-planets/>
  `,
})
export class AppComponent {}