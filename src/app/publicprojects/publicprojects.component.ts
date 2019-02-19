import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-publicprojects',
  templateUrl: './publicprojects.component.html',
  styleUrls: ['./publicprojects.component.css']
})
export class PublicprojectsComponent implements OnInit {

  constructor(private http:HttpClient,private projectService:ProjectService,private authService:AuthService) { }
  projects:Project[]=[];

  ngOnInit() {
    this.getPublicProjects().subscribe(data=>{
      this.projects = data
    })
  }

  getPublicProjects(){
    return this.http.get<Project[]>("http://localhost:59444/api/projects/toptwenty")
  }

  get isAuthenticated() {
    return this.authService.loggedIn();
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
