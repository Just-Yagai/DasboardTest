import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RNCEstado } from '../core/model/utils/rncEstado';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RncEstadoService {


  private apiurl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getRncEstado(rnc: string, ambienteID: number, canalID: number): Observable<RNCEstado[]> {
    return this.http.get<RNCEstado[]>(this.apiurl + `RncEstado/GetRncEstadoBy?rnc=${rnc}&AmbienteID=${ambienteID}&CanalID=${canalID}`)
      // .pipe(
      //   map(data => data.filter(data => 
      //       data.rnc === rnc &&
      //       data.AmbienteID === ambienteID &&
      //       data.CanalID === canalID
      //     ))
      // );
  }
}
