// src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DataComponent } from './data/person.component';
import { VehiclesComponent } from './data/vehicles.component';
import { PersonService } from './data/person.service';
import { VehiclesService } from './data/vehicles.service';
import { PlanetsService } from './data/planets.service';
import { PlanetsComponent } from './data/planets.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './popup/popup.component';




@NgModule({
  declarations: [AppComponent, DataComponent, VehiclesComponent, PlanetsComponent, PopupComponent],
  imports: [BrowserModule, NoopAnimationsModule],
  providers: [PersonService, VehiclesService, PlanetsService],
  bootstrap: [AppComponent],
})
export class AppModule {}