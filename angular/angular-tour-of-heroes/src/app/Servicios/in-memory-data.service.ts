import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HEROES } from '../Class&Date/heroes';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = HEROES;
    return {heroes};
  }

  
}