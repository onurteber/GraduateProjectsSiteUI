import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project';
import { AuthService } from "../services/auth.service";
import { Observable } from 'rxjs';
import { ProjectService } from '../services/project.service';
import { Router } from '@angular/router';
import { Student } from '../models/student';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private http:HttpClient,private authService:AuthService, private projectService:ProjectService,private router:Router) { }

  projects:Project[]=[];
  project : Project
  student : Student
  studentName:any

  ngOnInit() {
    this.getProjects().subscribe(data=>{
      this.projects = data
    })

}

  get isAuthenticated() {
    return this.authService.loggedIn();
  }
  getProjects(){
    
      return this.http.get<any[]>("http://localhost:59444/api/projects/topfive")
  }

  scoreArttir(projectid,studentid)
  {
    var id= this.authService.getCurrentUserId()
    return this.http.post("http://localhost:59444/api/projects/arttir/?projectid="+projectid+"&studentid="+id,null).subscribe(data=>{
      
    });
  }
  scoreAzalt(projectid)
  {
    var id= this.authService.getCurrentUserId()
    return this.http.post("http://localhost:59444/api/projects/azalt/?projectid="+projectid+"&studentid="+id,null).subscribe(data=>{
    })
  }
}
