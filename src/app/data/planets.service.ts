// src/app/shared/data.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, interval, mergeMap, switchMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  private planetsCache$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {
    // Immediately initiate the first fetch when the service is initialized
    this.fetchData();
    // Start the interval for subsequent fetches
    this.startFetchingInterval();
  }

  private fetchData(): void {
    fetch('https://swapi.dev/api/people')
      .then(response => response.json())
      .then(data => this.planetsCache$.next(data))
      .catch(error => console.error('Error fetching data', error));
  }

  startFetchingInterval(): void {
    interval(30000) // 10 seconds
    .pipe(
      switchMap(() => fetch('https://swapi.dev/api/planets')),
      switchMap((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      }),
      catchError((error) => {
        console.error('Error fetching vehicle data', error);
        return [];
      })
    )
    .subscribe((data) => {
      this.planetsCache$.next(data);
    });
  }

  getVehicles(): Observable<any> {
    return this.planetsCache$.asObservable();
  }
}