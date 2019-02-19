import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../services/university.service';
import { University } from '../models/university';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  constructor(private universityService:UniversityService,private http:HttpClient,private auth:AuthService) { }

  universities : University[]=[];

  ngOnInit() {
    this.getUniversity().subscribe(data=>{
      this.universities = data
    })
  }

getUniversity():Observable<University[]>{
  return this.http.get<University[]>('http://localhost:59444/api/Universities/university')
}

get isAuthenticated(){
  return this.auth.loggedIn()
}

}
