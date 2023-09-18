import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
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
    return this.http.get<Marcas[]>(`${this.apiUrl}Marcas/ObtenerMarca?ambiente=${ambienteID}&rnc=${rnc}&canal=${canalID}`)
    .pipe(
      tap((data: Marcas[]) => {
        console.log(data); 
      })
    );
  }
  
  updateMarca( marca: any): Observable<any> {
    return this.http.put(this.apiUrl + `Marcas/ActualizarMarcas/${marca.rnc}?ambiente=${marca.ambienteID}`, marca);
  }
}

