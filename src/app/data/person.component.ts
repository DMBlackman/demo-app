// src/app/data.component.ts

import { Component, AfterViewInit } from '@angular/core';
import { PersonService } from './person.service';

@Component({
  selector: 'app-data',
  styleUrls: ['../app.component.css'], 
  template: `
  <div class="container">
    <div class="column">
        <h2>Star Wars Characters</h2>
        <button (click)="fetchPeople()">Load Characters</button>
        <table *ngIf="person$ | async as person">
        <thead>
            <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>hair_color</th>
            <th>skin_color</th>
            <th>eye_color</th>
            <th>birth_year</th>
            <th>gender</th>
            <!-- Add more columns based on the SWAPI response structure -->
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let character of person.results; let i = index" [ngClass]="getRowColor(i)">
            <td>{{ character.name }}</td>
            <td>{{ character.height }}</td>
            <td>{{ character.mass }}</td>
            <td>{{ character.hair_color }}</td>
            <td>{{ character.skin_color }}</td>
            <td>{{ character.eye_color }}</td>
            <td>{{ character.birth_year }}</td>
            <td>{{ character.gender }}</td>
            <!-- Add more cells based on the SWAPI response structure -->
            </tr>
        </tbody>
        </table>
    </div>

    <div class="column">
        <!-- Add content for the second column if needed -->
    </div>
</div>
  `,
})
export class DataComponent implements AfterViewInit {
  person$ = this.personService.getPeople();

  constructor(private personService: PersonService) {}

  ngAfterViewInit(): void {}

  fetchPeople(): void {
    this.personService.getPeople();
  }


    // Function to determine the row color dynamically
    getRowColor(index: number): string {
        return index % 2 === 0 ? 'even-row' : 'odd-row';
      }
}