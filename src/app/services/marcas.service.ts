import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Marcas } from '../core';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor(
    private http: HttpClient
  ) { }

  getMarcas(rnc: string, ambienteID: number, canalID: number): Observable<Marcas[]> {
    return this.http.get<Marcas[]>('assets/json/marcas.json')
      .pipe(
        map(data => data.filter(data => 
            data.rnc === rnc &&
            data.AmbienteID === ambienteID &&
            data.CanalID === canalID
          ))
      );
  }
  
  updateMarca(marca: any): Observable<any> {
    return this.http.put('assets/json/marcas.json', marca);
  }
}
