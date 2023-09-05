import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
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
    return this.http.get<RNCEstado[]>(`${this.apiurl}RncEstado/ObtenerRncEstado?ambiente=${ambienteID}&rnc=${rnc}&CanalID=${canalID}`)
    .pipe(
      tap((data: RNCEstado[]) => {
        console.log(data);
      })
    );
  }

  updaterncEstado(rncEstado:any ):Observable<any>{
    return this.http.put<any>(this.apiurl + `RncEstado/ActualizarDelegaciones/${rncEstado.rnc}`,rncEstado)
  }
}
