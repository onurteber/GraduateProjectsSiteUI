import {Routes} from "@angular/router"
import { RegisterComponent } from "./register/register.component";
import { ProjectComponent } from "./project/project.component";
import { DepartmentComponent } from "./department/department.component";
import { PublicprojectsComponent } from "./publicprojects/publicprojects.component";
import { ProjectaddComponent } from "./project/projectadd/projectadd.component";
import { UniversityComponent } from "./university/university.component";
import { MyprojectsComponent } from "./project/myprojects/myprojects.component";
import { MapsapiComponent } from "./mapsapi/mapsapi.component";
import { MyfavoriteprojectComponent } from "./project/myfavoriteproject/myfavoriteproject.component";
import { DepartmentdetailComponent } from "./department/departmentdetail/departmentdetail.component";

export const appRoutes : Routes = [
  { path: "register", component: RegisterComponent },
  { path: "project", component: ProjectComponent },
  { path: "departments", component: DepartmentComponent },
  { path: "departmentdetail/:id", component: DepartmentdetailComponent },
  { path: "publicprojects", component: PublicprojectsComponent },
  { path: "projectadd", component: ProjectaddComponent },
  { path: "universite", component: UniversityComponent },
  { path: "myprojects", component: MyprojectsComponent },
  { path: "myfavoriteprojects", component: MyfavoriteprojectComponent },
  { path: "mapsapi/:id", component: MapsapiComponent },
  { path: "**", component: PublicprojectsComponent }

];
