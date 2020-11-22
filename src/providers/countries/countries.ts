import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CountriesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const CONTRIES_API_URL = 'https://restcountries.eu/rest/v2/all';
@Injectable()
export class CountriesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CountriesProvider Provider');
  }

  getAllCountries(){
    return this.http.get(`${CONTRIES_API_URL}`);
  }

}
