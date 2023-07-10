import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Secuencias } from '../core/model/utils/secuencias';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SecuenciasService {

  private apiurl = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getSecuencias(rnc: string, ambienteID: number, canalID: number, TipoECF: number): Observable<Secuencias[]> {
    return this.http.get<Secuencias[]>(this.apiurl + `Secuencia/GetSecuenciaBy?rnc=${rnc}&AmbienteID=${ambienteID}&CanalID=${canalID}&TipoECF=${TipoECF}`)
      // .pipe(
      //   map(data => data.filter(data => 
      //       data.rnc === rnc &&
      //       data.AmbienteID === ambienteID &&
      //       data.CanalID === canalID &&
      //       (TipoECF != 0 ? data.TipoECF === TipoECF: true)
      //     ))
      // );
  }
}
