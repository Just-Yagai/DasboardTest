import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Dashboard } from '../core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }

  getRNC(rnc: string): Observable<Dashboard | undefined> {
    return this.http.get<Dashboard[]>('assets/json/contribuyentes.json')
      .pipe(
        map((data: Dashboard[]) => data.find((item: Dashboard) => item.rnc === rnc))
      );
  }

}
