import { Component, OnInit } from '@angular/core';
import { 
  FormGroup,
  Validators,
  FormControl, 
  FormArray,
  FormBuilder} from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-projectadd',
  templateUrl: './projectadd.component.html',
  styleUrls: ['./projectadd.component.css']
})
export class ProjectaddComponent implements OnInit {

  constructor(private FormBuilder:FormBuilder,private ProjectService:ProjectService,private authService:AuthService,
    private alertifyService:AlertifyService,private DepartmentService:DepartmentService,private router:Router) { }

  projectAddForm : FormGroup;
  project:any={}
  departments:Department[]=[];
  ngOnInit() {
    this.getDepartment();
    this.createProjectAddForm();
  }

  createProjectAddForm(){
    this.projectAddForm = this.FormBuilder.group(
      {
        ProjectName:["",Validators.required],
        DepartmentID:[null,Validators.required],
        AcademicalPersonalName:["",Validators.required],
        ProjectUrl:["",Validators.required],
        ProjectDescription:["",Validators.required]
      }
    )
  }

  getDepartment(){
    this.DepartmentService.GetDepartment().subscribe(data=>{
      this.departments=data
    })}

  projectAdd(){
    if(this.projectAddForm.valid){
      this.project = Object.assign({},this.projectAddForm.value)
      this.ProjectService.projectAdd(this.project)
      this.alertifyService.success("Sisteme Başarı İle Eklendi");
      this.router.navigateByUrl("/myprojects");
    }
  }
  
  get isAuthenticated() {
   return this.authService.loggedIn();
 }
 
}
