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
  // private urlApi = 'https://localhost:7061/api/Marcas/ObtenerMarcas';
  
  constructor(
    private http: HttpClient
  ) { }
  
  public getAPi(): Observable<Marcas> {
    return this.http.get<Marcas>(this.apiUrl + 'Marcas/ObtenerMarcas');
  }

  // getRNC(rnc: string): Observable<Dashboard | undefined> {
  //   return this.http.get<Dashboard[]>('assets/json/contribuyentes.json')
  //     .pipe(
  //       map((data: Dashboard[]) => data.find((item: Dashboard) => item.rnc === rnc))
  //     );
  // }

  getRNC(rnc: string): Observable<Dashboard | undefined> {
    return this.http.get<Dashboard[]>(this.apiUrl + `Contribuyente/ObtenerContribuyentesByRnc?rnc=${rnc}`)
      .pipe(
        map((data: Dashboard[]) => data.find((item: Dashboard) => item.rnc === rnc))
      );
  }
}
