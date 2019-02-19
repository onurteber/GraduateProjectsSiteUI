import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department';
import { HttpClient } from '@angular/common/http';
import { DepartmentService } from '../services/department.service';
import {ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  providers:[DepartmentService]
})
export class DepartmentComponent implements OnInit {

  constructor(private http:HttpClient,private activatedroute:ActivatedRoute,private authService:AuthService,private service:DepartmentService) { }

  departments:Department[]=[];

  ngOnInit() {
   this.service.GetDepartment().subscribe(data=>{
     this.departments=data
   })
    
  }
  get isAuthenticated() {
    return this.authService.loggedIn();
  }

 

}
