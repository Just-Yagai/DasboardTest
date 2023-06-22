import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ModelFilter } from '../core';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor(private http: HttpClient) { }

  // getAmbiente(ambienteID: number, canalID: number): Observable<ModelFilter | undefined> {
  //   return this.http.get<ModelFilter[]>('assets/json/ambiente.json')
  //     .pipe(
  //       map((data: ModelFilter[]) => data.find((item: ModelFilter) => 
  //       item.ambienteID === ambienteID &&
  //       item.canalID === canalID
  //       ))
  //     );
  // }

  getAmbiente(ambienteID: number, canalID: number): Observable<ModelFilter[]> {
    return this.http.get<ModelFilter[]>('assets/json/ambiente.json')
      .pipe(
        map(data => data.filter(data => 
            data.ambienteID === ambienteID &&
            data.canalID === canalID
          ))
      );
  }

  getCanal(ambienteID: number, canalID: number): Observable<ModelFilter[]> {
    return this.http.get<ModelFilter[]>('assets/json/canal.json')
      .pipe(
        map(data => data.filter(data => 
            data.ambienteID === ambienteID &&
            data.canalID === canalID
          ))
      );
  }

  // getCanal(ambienteID: number, canalID: number): Observable<ModelFilter | undefined> {
  //   return this.http.get<ModelFilter[]>('assets/json/canal.json')
  //     .pipe(
  //       map((data: ModelFilter[]) => data.find((item: ModelFilter) => 
  //       item.ambienteID === ambienteID &&
  //       item.canalID === canalID
  //       ))
  //     );
  // }
}
