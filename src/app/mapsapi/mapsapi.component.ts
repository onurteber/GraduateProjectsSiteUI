import { Component, OnInit } from "@angular/core";
import { University } from "../models/university";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-mapsapi",
  templateUrl: "./mapsapi.component.html",
  styleUrls: ["./mapsapi.component.css"]
})
export class MapsapiComponent implements OnInit {
  universityId: number = 0;
  title = "my-maps-project";
  universities: University = new University();
  latitude: any = 0;
  longitude: any = 0;
  constructor(private http: HttpClient, private ActivateRoute:ActivatedRoute,private authService:AuthService) {
    this.ActivateRoute.params.subscribe(params=>{
      this.universityId = params["id"];
    });
    this.universities.latitude = 0;
    this.universities.longitude = 0;
    }
    
  async ngOnInit() {
      return new Promise<University[]>((resolve) => {
        this.getUniversity().subscribe(data => {
          data.map((value, index) => {
            if (this.universityId != 0) {
              if (this.universityId == value.universityID) {
                this.universities = value;
                resolve();
              }
            }
          });
        });
      })
  }
  getUniversity(): Observable<University[]> {
    return this.http.get<University[]>(
      "http://localhost:59444/api/Universities/university"
    );
  }
  get isAuthenticated() {
    return this.authService.loggedIn();
  }
}
