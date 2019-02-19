import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { 
  FormGroup,
  Validators,
  FormControl, 
  FormArray,
  FormBuilder,
  CheckboxRequiredValidator} from '@angular/forms';
import { Department } from '../models/department';
import { University } from '../models/university';
import { DepartmentService } from '../services/department.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService, private DepartmentService:DepartmentService,private FormBuilder:FormBuilder,
    private formBuilder:FormBuilder) { }

    departments:Department[]=[];
    universities:University[]=[];
    registerForm : FormGroup;
    registerUser:any={}
  ngOnInit() {
    if(!(this.isAuthenticated)){
      this.getDepartment()
      this.getUniversity()
      this.createRegisterForm()
      
      }
  }

  createRegisterForm(){
    this.registerForm = this.FormBuilder.group(
      {
        StudentName:["",Validators.required],
        StudentLastName:["",Validators.required],
        Email:["",Validators.required],
        DepartmentID:[null,Validators.required],
        UniversityID:[null,Validators.required],
        sozlesme:[false, Validators.pattern('true')],
        password:["",[Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8)]],
        confirmPassword:["",Validators.required]
      },
      {validator:this.passwordMatchValidator}
    )
  }

  getDepartment(){
    this.DepartmentService.GetDepartment().subscribe(data=>{
      this.departments=data
    })}

   getUniversity(){
    this.DepartmentService.GetUniversity().subscribe(data=>{
      this.universities=data
    })}


   passwordMatchValidator(g:FormGroup){
     return g.get('password').value === 
     g.get('confirmPassword').value?null:{mismatch:true}
   }

   register(){
     if(this.registerForm.valid){
       this.registerUser = Object.assign({},this.registerForm.value)
       this.authService.register(this.registerUser)
     }
   }
   get isAuthenticated() {
    return this.authService.loggedIn();
  }
}
