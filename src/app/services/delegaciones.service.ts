import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Delegaciones } from '../core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DelegacionesService {

  constructor(
    private http: HttpClient
  ) { }

  getDelegaciones(rnc: string, ambienteID: number, canalID: number): Observable<Delegaciones[]> {
    return this.http.get<Delegaciones[]>('assets/json/delegaciones.json')
      .pipe(
        map(data => data.filter(data => 
            data.rnc === rnc &&
            data.AmbienteID === ambienteID &&
            data.CanalID === canalID
          ))
      );
  }
}
