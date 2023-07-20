import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../core/model/utils/login.interface';
import { ResponseI } from '../core/model/utils/Response.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient ) {}

loginByApi(form:Login):Observable<ResponseI>{
    let dirrecion = this.apiUrl + "Login";
    return this.http.post<ResponseI>(dirrecion,form);
}
  
}
