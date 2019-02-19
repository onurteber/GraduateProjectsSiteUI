import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { AuthService } from './auth.service';
import { LikeProject } from '../models/likeProject';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

constructor(private http:HttpClient,private authService:AuthService,private auth:AuthService) { }

project:Project


GetProjectsById(id):Observable<Project[]>{
  return this.http.get<Project[]>("http://localhost:59444/api/projects/projectdetail/?id="+id)
}

GetMyProject():Observable<Project[]>{
  var id = this.auth.getCurrentUserId();
  return this.http.get<Project[]>("http://localhost:59444/api/projects/getmyprojects/?studentid="+id)
}

GetMyFavoriteProject():Observable<LikeProject[]>{
  var id = this.auth.getCurrentUserId();
  return this.http.get<LikeProject[]>("http://localhost:59444/api/projects/getmyfavoriteprojects/?studentid="+id);
}

projectAdd(project : Project){
  var id = this.authService.getCurrentUserId()
  project.StudentID=id
  let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http
      .post("http://localhost:59444/api/projects/add/", project, { headers: headers })
      .subscribe(data=>{
        
      });
}



}
