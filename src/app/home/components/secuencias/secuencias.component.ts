import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { DatosSecuenciass } from 'src/app/core/model/utils/DatosSecuencias';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-secuencias',
  templateUrl: './secuencias.component.html',
  styleUrls: ['./secuencias.component.css']
})
export class SecuenciasComponent  {

  @Input() SecuenciasDatos: DatosSecuenciass | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator;

    pageSizeActual: number = 1;
    paginaActual: number = 0; 
    pageSizeIncrementoDecremento: number = 1;

  constructor(private dashboardComponent: DashboardComponent) {}

  ngAfterViewInit() {
      this.paginator._intl.itemsPerPageLabel = 'Registros Por Página';
  }

  actualizarTamanoPagina(event: PageEvent) {
    // Calcula el nuevo tamaño de página basado en la dirección (adelante o atrás)
    this.pageSizeActual += (event.pageIndex > this.paginaActual) ? this.pageSizeIncrementoDecremento : -this.pageSizeIncrementoDecremento;
    // Asegura que el tamaño de página no sea menor que 1
    this.pageSizeActual = Math.max(this.pageSizeActual, 1);
  
    this.paginaActual = event.pageIndex; // Actualiza el índice de la página actual
    this.dashboardComponent.modeloFiltrado.pageSize = this.pageSizeActual;
    this.dashboardComponent.obtenerSecuencias(this.dashboardComponent.modeloFiltrado);
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
