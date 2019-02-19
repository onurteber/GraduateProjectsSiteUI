import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/models/department';
import {ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Departmentprojectdto } from 'src/app/DTO/departmentprojectdto';

@Component({
  selector: 'app-departmentdetail',
  templateUrl: './departmentdetail.component.html',
  styleUrls: ['./departmentdetail.component.css'],
  providers:[DepartmentService]
})
export class DepartmentdetailComponent implements OnInit {

  constructor(private departmentService:DepartmentService,private authService:AuthService, private ActivateRoute:ActivatedRoute,private http:HttpClient) { }
  
  project:Departmentprojectdto[];

  ngOnInit() {
    this.ActivateRoute.params.subscribe(params=>{
   
      this.GetProjectsOfDepartment(params["id"])
    });
    

  }
  get isAuthenticated() {
    return this.authService.loggedIn();
  }

  GetProjectsOfDepartment(id){
    this.departmentService.GetProjectsOfDepartment(id).subscribe(data=>{
      this.project = data
    })
  }
}
