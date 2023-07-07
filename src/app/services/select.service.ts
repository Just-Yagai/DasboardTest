import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ModeloFilter } from '../core';
import { TiposECF } from '../core/model/utils/tipoECF';
import { environment } from 'src/environments/environment';
import { Ambiente } from '../core/model/utils/ambiente';
import { Canal } from '../core/model/utils/canal';
@Injectable({
  providedIn: 'root'
})
export class SelectService {

  private apiUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  getAmbiente(): Observable<Ambiente[]> {
    return this.http.get<Ambiente[]>(this.apiUrl + 'Ambiente/ObtenerCanal');
  }

  getCanal(): Observable<Canal[]>{
    return this.http.get<Canal[]>(this.apiUrl + 'Canal/ObtenerCanal');
  }

  getTipoECF(): Observable<TiposECF[]>{
    return this.http.get<TiposECF[]>('assets/json/tipo_ECF.json');
  }
}
