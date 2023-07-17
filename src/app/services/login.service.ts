
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = "https://localhost:7061/api/Login";

  constructor(
    private http: HttpClient
  ) { }

login(username: string, password: string): Observable<any> {
    const userLogin = { username, password };
    return this.http.post<any>(`${this.apiUrl}`, userLogin);
  }
  
}






