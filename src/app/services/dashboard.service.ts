import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Dashboard, Marcas } from '../core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl = environment.apiUrl;
  
  constructor(
    private http: HttpClient
  ) { }
  

  getRNC(rnc: string): Observable<Dashboard | undefined> {
    return this.http.get<Dashboard[]>(`${this.apiUrl}Contribuyente/ObtenerContribuyente?rnc=${rnc}`)
    .pipe(
      map((data: Dashboard[]) => {
        const result = data.find((item: Dashboard) => item.rnc === rnc);
        console.log(result); 
        return result;
      })
    );
  }
}
