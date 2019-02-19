import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { University } from '../models/university';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

constructor(private http:HttpClient) { }



}
