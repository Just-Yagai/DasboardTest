import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RNCEstado } from '../core/model/utils/rncEstado';
@Injectable({
  providedIn: 'root'
})
export class RncEstadoService {

  constructor(
    private http: HttpClient
  ) { }

  getRncEstado(rnc: string, ambienteID: number, canalID: number): Observable<RNCEstado[]> {
    return this.http.get<RNCEstado[]>('assets/json/rnc-estado.json')
      .pipe(
        map(data => data.filter(data => 
            data.rnc === rnc &&
            data.AmbienteID === ambienteID &&
            data.CanalID === canalID
          ))
      );
  }
}
