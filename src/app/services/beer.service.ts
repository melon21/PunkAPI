import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { IBeer } from '../ibeer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private apiService: ApiService) { }

  async GetBeers(): Promise<IBeer[]> {
   return this.apiService.get();
  }
}
