import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';
import { IBeer } from '../ibeer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BeerUrl = 'https://api.punkapi.com/v2/beers';
  constructor(private httpClient: HttpClient) { }

  async get(options?: any): Promise<IBeer[]> {
    return this.httpClient.get<IBeer[]>(this.BeerUrl,
      {
        headers: null,
        params: options
      }).toPromise();
  }
  }
