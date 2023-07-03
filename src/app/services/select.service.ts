import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ModeloFilter } from '../core';
import { TiposECF } from '../core/model/utils/tipoECF';
@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor(private http: HttpClient) { }

  getAmbiente(): Observable<any> {
    return this.http.get('assets/json/ambiente.json');
  }

  getCanal(): Observable<any>{
    return this.http.get('assets/json/canal.json');
  }

  getTipoECF(): Observable<TiposECF[]>{
    return this.http.get<TiposECF[]>('assets/json/tipo_ECF.json');
  }
}
