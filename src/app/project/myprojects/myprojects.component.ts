import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Project } from 'src/app/models/project';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/services/project.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.css']
})
export class MyprojectsComponent implements OnInit {

  constructor(private http:HttpClient,private projectService:ProjectService,private authService:AuthService,
    private alertifyService:AlertifyService,private router:Router) { }
  project:Project[];
  ngOnInit() {
    this.projectService.GetMyProject().subscribe(data => {
      this.project =data
    })
  }
  get isAuthenticated() {
    return this.authService.loggedIn();
  }
  
  deleteProject(projecid){
    return this.http.post("http://localhost:59444/api/projects/delete/?projectid="+projecid,null).subscribe(data=>{
      this.alertifyService.success("Proje Silindi! ");
      this.router.navigateByUrl("/myprojects");
    })
  }
  
 

}
