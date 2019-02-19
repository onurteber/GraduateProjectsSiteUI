import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';
import { HttpClient } from '@angular/common/http';
import { LikeProject } from 'src/app/models/likeProject';

@Component({
  selector: 'app-myfavoriteproject',
  templateUrl: './myfavoriteproject.component.html',
  styleUrls: ['./myfavoriteproject.component.css']
})
export class MyfavoriteprojectComponent implements OnInit {

  project:LikeProject[];

  constructor(private authService:AuthService,private http:HttpClient,private projectService:ProjectService) { }

  ngOnInit() {
    this.projectService.GetMyFavoriteProject().subscribe(data => {
      this.project =data
    })
  }

  scoreAzalt(projectid)
  {
    var id= this.authService.getCurrentUserId()
    return this.http.post("http://localhost:59444/api/projects/arttir/?projectid="+projectid+"&studentid="+id,null).subscribe(data=>{
    })
  }

  get isAuthenticated() {
    return this.authService.loggedIn();
  }

}
