import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  
  

loginByApi(loginData: Login): Observable<string> { // Cambiamos el tipo de Observable a 'string'
  const { username, password } = loginData;
  const url = `${this.apiUrl}Login?username=${username}&password=${password}`;
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post<string>(url, null, { headers, responseType: 'text' as 'json' }); // Especificamos el responseType como 'text'
}
  
}
