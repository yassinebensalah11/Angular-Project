import { Residence } from './../Residence';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Residence } from '../models/Residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  residenceUrl ='http://localhost:3000/Residences';

  constructor( private http: HttpClient) { } //nzid HttpClientModule f app.module.ts

  getresidences(){
    return this.http.get<Residence[]>(this.residenceUrl);
  }

  addResidence(residence: Residence){
    return this.http.post(this.residenceUrl, residence);
  }

  deleteResidence(id: number){
    return this.http.delete(`${this.residenceUrl}/${id}`);
  }
}
