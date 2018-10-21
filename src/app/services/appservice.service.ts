import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private httpClient: HttpClient) {
  }

  //set header
  getHeader() {
    let headers = new HttpHeaders();
    headers.set('Content-Type', "application/json")
    headers.set('auth-token', localStorage.getItem('auth-token'))
    return headers;
  }

  //call web api using httppost
  httpPost(url, obj) {
    var response = this.httpClient.post(environment.serverUrl + url, obj, { headers: this.getHeader() }).subscribe(
      data => {
        console.log("POST Request is successful ", data);
      },
      error => {
        console.log("Error", error);
      }
    );
    return response;
  }

  //call webapi using httpget
  httpGet(url) {
    var response = this.httpClient.get(environment.serverUrl + url, { headers: this.getHeader() }).subscribe(
      data => {
        console.log("POST Request is successful ", data);
      },
      error => {
        console.log("Error", error);
      }
    );
    return response;
  }

  
}
