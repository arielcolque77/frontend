import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable, observable } from 'rxjs'
import {environment} from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  login(email:string, password:string):Observable<any>{
    console.log(email+ " = " +password);
    return this.http.post(`${environment.apiURL}/login`,{
      email,password
    }, httpOptions);
  }

}
