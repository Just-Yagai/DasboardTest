import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Marcas } from '../core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getMarcas(rnc: string, ambienteID: number, canalID: number): Observable<Marcas[]> {
    return this.http.get<Marcas[]>(this.apiUrl + `Marcas/ObtenerMarcasBy?rnc=${rnc}&AmbienteID=${ambienteID}&CanalID=${canalID}`);
      // .pipe(
      //   map(data => data.filter(data => 
      //       data.rnc === rnc &&
      //       data.AmbienteID === ambienteID &&
      //       data.CanalID === canalID
      //     ))
      // );
  }
  
  updateMarca( marca: any): Observable<any> {
    return this.http.put(this.apiUrl + `Marcas/ActualizarMarcas/${marca.rnc}`, marca);
  }
}

// Probando el cambios de prueba a master aqui tambien