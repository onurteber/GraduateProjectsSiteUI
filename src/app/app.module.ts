import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Router } from "@angular/router";
import { appRoutes } from "./routes";
import { NgxGalleryModule } from "ngx-gallery";
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {NgxEditorModule} from 'ngx-editor'
import {FileUploadModule} from 'ng2-file-upload'
import { AgmCoreModule } from '@agm/core'

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import {AlertifyService} from './services/alertify.service'
import { RegisterComponent } from './register/register.component';
import { ProjectComponent } from './project/project.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentdetailComponent } from './department/departmentdetail/departmentdetail.component';
import { PublicprojectsComponent } from './publicprojects/publicprojects.component';
import { ProjectaddComponent } from './project/projectadd/projectadd.component'
import { UniversityComponent } from './university/university.component';
import { MyprojectsComponent } from './project/myprojects/myprojects.component';
import { MapsapiComponent } from './mapsapi/mapsapi.component';
import { FooterComponent } from './footer/footer.component';
import { MyfavoriteprojectComponent } from './project/myfavoriteproject/myfavoriteproject.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      ProjectComponent,
      RegisterComponent,
      DepartmentComponent,
      DepartmentdetailComponent,
      PublicprojectsComponent,
      ProjectaddComponent,
      UniversityComponent,
      MyprojectsComponent,
      MapsapiComponent,
      FooterComponent,
      MyfavoriteprojectComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      NgxGalleryModule,
      FormsModule,
      ReactiveFormsModule,
      NgxEditorModule,
      FileUploadModule,
      AgmCoreModule.forRoot({
        apiKey:"AIzaSyDWVRVKuboTPx0ykh_BIHl1afXfrqTVO6E"
      })
   ],
   
   providers: [
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
