import { Component, OnInit } from '@angular/core';
// Servicios
import { DashboardService } from 'src/app/services/dashboard.service';
import { MarcasService } from 'src/app/services/marcas.service';
import { DelegacionesService } from 'src/app/services/delegaciones.service';
import { SecuenciasService } from 'src/app/services/secuencias.service';
import { RncEstadoService } from 'src/app/services/rnc-estado.service';
import { AlertsService } from '../utils/alerts.service';

import { Dashboard } from 'src/app/core';
import { TipoCertificacion } from 'src/app/core/model/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  datos: Dashboard | undefined;
  tipoCertificacion: TipoCertificacion[];

  rnc: string;
  razonSocial: string;

  selectedTipoCertificacion: string | null;
  isSelectDisabled: boolean = true;
  datosTipo: any = [];

  constructor(
    private DashboardServices: DashboardService,
    private MarcasServices: MarcasService,
    private DelegacionesServices: DelegacionesService, 
    private SecuenciasServices: SecuenciasService,
    private RncEstadoServices: RncEstadoService,
    private AlertServices: AlertsService
  ){}

  ngOnInit(){
    // this.obtenerRNC('002');
  }

  obtenerRNC(rnc: string){
    this.DashboardServices.getRNC(rnc)
        .subscribe((data) => {
          this.datos = data;
          console.log(data);
        })
  }

  obtenerRNC2(rnc: string){
    if (!rnc) {
      this.AlertServices.rncNoIntroducido();
      return;
    }

    this.DashboardServices.getRNC(rnc)
        .subscribe((data) => {
          if (data) {
            this.updateDatarncValidos(data);
            this.AlertServices.rncValido();
          } else {
            this.AlertServices.rncInvalido();
          }
        });
  }

  updateDatarncValidos(data: Dashboard) {
    this.razonSocial = data.razonSocial;
    this.tipoCertificacion = data.tipo_certificacion;
    this.isSelectDisabled = false;

    const tipoEmisor = this.tipoCertificacion.find((tipo: any) => tipo.tipo === 'Emisor');
    const tipoProveedor = this.tipoCertificacion.find((tipo: any) => tipo.tipo === 'Proveedor');
    
    this.selectedTipoCertificacion = tipoEmisor ? 'Emisor' : tipoProveedor ? 'Proveedor' : null;
    const tipoSeleccionado = tipoEmisor || tipoProveedor;
    this.datosTipo.estado = tipoSeleccionado ? tipoSeleccionado.estado : '';
    this.datosTipo.inicio_postulacion = tipoSeleccionado ? tipoSeleccionado.inicio_postulacion : '';
    this.datosTipo.finalizacion_postulacion = tipoSeleccionado ? tipoSeleccionado.finalizacion_postulacion : '';
  }

  getDatosTipoCertificacion() {
    this.datosTipo = this.tipoCertificacion.find(
    (tipoCert: { tipo: string | null}) => tipoCert.tipo === this.selectedTipoCertificacion
    );
  }
}
