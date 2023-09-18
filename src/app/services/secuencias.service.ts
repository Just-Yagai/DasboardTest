import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import {  DatosSecuenciass } from '../core/model/utils/DatosSecuencias';

@Injectable({
  providedIn: 'root'
})
export class SecuenciasService {

  private apiurl = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getSecuencias(rnc: string, ambienteID: number, canalID: number, TipoECF: number, pageSize: number, pageNumber:number ): Observable<DatosSecuenciass> {
    return this.http.get<DatosSecuenciass>(this.apiurl +`Secuencia/ObtenerSecuencia?ambiente=${ambienteID}&rnc=${rnc}&CanalID=${canalID}&TipoECF=${TipoECF}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
    .pipe(
      tap((data: DatosSecuenciass) => {
        console.log(data);
      })
    );
  }
}
