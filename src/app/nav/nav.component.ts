import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { AlertifyService } from "../services/alertify.service";
import { promise } from "protractor";
import { resolve } from "url";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  constructor(private authService: AuthService,private alertifyService:AlertifyService) {}

  loginUser: any = {};
  deneme:number
  ngOnInit() {  
    
     }

  login() {
      this.authService.login(this.loginUser)   
      
      
  }

  logOut(){
    this.authService.logOut();
  }

  get isAuthenticated(){
     return this.authService.loggedIn();     
  }
}
