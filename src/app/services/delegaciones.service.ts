import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Delegaciones } from '../core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DelegacionesService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  
  getDelegaciones(rnc: string, ambienteID: number, canalID: number): Observable<Delegaciones[]> {
    return this.http.get<Delegaciones[]>(`${this.apiUrl}DelegacionDb/ObtenerDelegaciones?ambiente=${ambienteID}&rnc=${rnc}&canal=${canalID}`)
    .pipe(
      tap((data: Delegaciones[]) => {
        console.log(data);
      })
    );
  }

  updateDelegaciones(delegaciones:any ): Observable<any> {
    return this.http.put(`${this.apiUrl}DelegacionDb/ActualizarDelegacion/${delegaciones.rnc}?ambiente=${delegaciones.ambienteID}`, delegaciones);
  }
}
