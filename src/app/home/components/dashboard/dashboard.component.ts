import { Component, OnInit, ViewChild } from '@angular/core';
// Servicios
import { DashboardService } from 'src/app/services/dashboard.service';
import { MarcasService } from 'src/app/services/marcas.service';
import { DelegacionesService } from 'src/app/services/delegaciones.service';
import { SecuenciasService } from 'src/app/services/secuencias.service';
import { RncEstadoService } from 'src/app/services/rnc-estado.service';
import { AlertsService } from '../../pages/utils/alerts.service';

import { Dashboard, Marcas, ModeloFilter } from 'src/app/core';
import { TipoCertificacion } from 'src/app/core/model/utils/dashboard';
import { ModeloGeneral } from 'src/app/core/model/general';

// ViewChild
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild(SelectComponent) selectComponent: SelectComponent;

  // Modelo de Datos
  modeloDatos: ModeloGeneral = new ModeloGeneral();

  // Modelo de Filtrado
  modeloFiltrado: ModeloFilter = new ModeloFilter('',0,'',0,0,0);
  //migracion realizada
  // Datos Generales Del Contribuyente
  rnc: string;
  razonSocial: string;
  
  tipoCertificacion: TipoCertificacion[];
  isSelectDisabled: boolean = true;

  selectedTipoCertificacion: string | null;
  datosTipo: any = [];

  // Datos: Marcas, Delegaciones, Secuencias, RNC Estado
  datosMarcas: Marcas[];
  datosAPI: Marcas;
//probando branch prueba2
  constructor(
    private DashboardServices: DashboardService,
    private MarcasServices: MarcasService,
    private DelegacionesServices: DelegacionesService, 
    private SecuenciasServices: SecuenciasService,
    private RncEstadoServices: RncEstadoService,
    private AlertServices: AlertsService
  ){}

  ngOnInit(){
    // this.obtenerDataApi();
  }

  
  // Obtener RNC
  obtenerRNC(rnc: string) {
    if (!rnc) {
      this.AlertServices.rncNoIntroducido();
      return;
    }

    this.DashboardServices.getRNC(rnc)
        .subscribe((data) => {
          if (data) {
            this.updateDataRncValidos(data);
            this.AlertServices.rncValido();
            this.modeloFiltrado.rnc = this.rnc;
            this.modeloFiltrado.ambienteID = 1;
            this.modeloFiltrado.canalID = 1;
            this.modeloFiltrado.TipoECF = 0;
            this.obtenerMarcas(this.modeloFiltrado);
            this.obtenerDelegaciones(this.modeloFiltrado);
            this.obtenerSecuencias(this.modeloFiltrado);
            this.obtenerRncEstado(this.modeloFiltrado);
           // this.updatemarca;
            
          } else {
            this.AlertServices.rncInvalido();
            this.updateDataRncInvalidos();
          }
        });
  }

  updateDataRncValidos(data: Dashboard) {
    this.razonSocial = data.razonSocial;
    this.tipoCertificacion = data.tiposCertificacion;
    this.isSelectDisabled = false;

    const tipoEmisor = this.tipoCertificacion.find((tipo: any) => tipo.tipo === 'Emisor');
    const tipoProveedor = this.tipoCertificacion.find((tipo: any) => tipo.tipo === 'Proveedor');
    
    this.selectedTipoCertificacion = tipoEmisor ? 'Emisor' : tipoProveedor ? 'Proveedor' : null;
    const tipoSeleccionado = tipoEmisor || tipoProveedor;
    this.datosTipo.estado = tipoSeleccionado ? tipoSeleccionado.estado : '';
    this.datosTipo.inicioPostulacion = tipoSeleccionado ? tipoSeleccionado.inicioPostulacion : '';
    this.datosTipo.finalizacionPostulacion = tipoSeleccionado ? tipoSeleccionado.finalizacionPostulacion : '';
  }

  updateDataRncInvalidos() {
    this.rnc = '';
    this.razonSocial = '';
    this.tipoCertificacion = [];
    this.datosTipo = [];
    this.isSelectDisabled = true;
    this.modeloDatos.Marcas = [];
  }

  clearData() {
    if (!this.rnc) {
      this.razonSocial = '';
      this.tipoCertificacion = [];
      this.selectedTipoCertificacion = null;
      this.isSelectDisabled = true;
      this.datosTipo = [];
      this.modeloDatos.Marcas = [];
    }
  }

  getDatosTipoCertificacion() {
    this.datosTipo = this.tipoCertificacion.find(
    (tipoCert: { tipo: string | null}) => tipoCert.tipo === this.selectedTipoCertificacion
    );
  }

  // Obtener Marcas
  obtenerMarcas(modeloFiltrado: ModeloFilter) {
    this.MarcasServices.getMarcas(modeloFiltrado.rnc, modeloFiltrado.ambienteID, modeloFiltrado.canalID)
        .subscribe((data) => {
          this.modeloDatos.Marcas = data;
          console.log(data);
        })
  }

  // Obtener Delegaciones
  obtenerDelegaciones(modeloFiltrado: ModeloFilter) {
    this.DelegacionesServices.getDelegaciones(modeloFiltrado.rnc, modeloFiltrado.ambienteID, modeloFiltrado.canalID)
        .subscribe((data) => {
          this.modeloDatos.Delegaciones = data;
          // console.log(data);
        })
  }

  // Obtener Secuencias
  obtenerSecuencias(modeloFiltrado: ModeloFilter) {
    this.SecuenciasServices.getSecuencias(modeloFiltrado.rnc, modeloFiltrado.ambienteID, modeloFiltrado.canalID, modeloFiltrado.TipoECF)
        .subscribe((data) => {
          this.modeloDatos.Secuencias = data;
          // console.log(data);
        })
  }

  // Obtener RNC Estado
  obtenerRncEstado(modeloFiltrado: ModeloFilter) {
    this.RncEstadoServices.getRncEstado(modeloFiltrado.rnc, modeloFiltrado.ambienteID, modeloFiltrado.canalID)
        .subscribe((data) => {
          this.modeloDatos.RncEstado = data;
          // console.log(data);
        })
  }
}
