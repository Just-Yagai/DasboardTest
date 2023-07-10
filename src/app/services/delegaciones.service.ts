import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Delegaciones } from '../core';
import { Observable, map } from 'rxjs';
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
    return this.http.get<Delegaciones[]>(this.apiUrl +`Delegaciones/ObtenerDelegacionesBy?rnc=${rnc}&AmbienteID=${ambienteID}&CanalID=${canalID}`)
      // .pipe(
      //   map(data => data.filter(data => 
      //       data.rnc === rnc &&
      //       data.AmbienteID === ambienteID &&
      //       data.CanalID === canalID
      //     ))
      // );
  }
}
