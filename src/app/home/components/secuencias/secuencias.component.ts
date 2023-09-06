import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { DatosSecuenciass } from 'src/app/core/model/utils/DatosSecuencias';

@Component({
  selector: 'app-secuencias',
  templateUrl: './secuencias.component.html',
  styleUrls: ['./secuencias.component.css']
})
export class SecuenciasComponent  {

  @Input() SecuenciasDatos: DatosSecuenciass;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {}

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel='Registros Por Página';
  }
  
  // Modal Secuencias
  fechaRegistroModal2: string = '';
  fechaDesdeModal: string = '';
  fechaHastaModal: string = '';

  setFechaRegistro2(fechaRegistro2: string) {
    this.fechaRegistroModal2 = fechaRegistro2;
  }

  setFechaDesdeModal(fechaDesde: string) {
    this.fechaDesdeModal = fechaDesde;
  }

  setFechaHastaModal(fechaHasta: string) {
    this.fechaHastaModal = fechaHasta;
  }
  // end modal
}
