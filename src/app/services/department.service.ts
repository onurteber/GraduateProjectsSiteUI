import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../models/department';
import { Project } from '../models/project';
import { University } from '../models/university';
import { Departmentprojectdto } from '../DTO/departmentprojectdto';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

constructor(private http:HttpClient) { }

GetDepartment():Observable<Department[]>{
  return this.http.get<Department[]>("http://localhost:59444/api/Department/departments")
}

GetUniversity():Observable<University[]>{
  return this.http.get<University[]>("http://localhost:59444/api/Universities/university")
}

GetProjectsOfDepartment(id):Observable<Departmentprojectdto[]>{
  return this.http.get<Departmentprojectdto[]>("http://localhost:59444/api/projects/GetProjectsOfDepartment/?id="+id)
}

}
