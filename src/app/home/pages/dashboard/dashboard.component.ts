import { Component, OnInit, ViewChild } from '@angular/core';
// Servicios
import { DashboardService } from 'src/app/services/dashboard.service';
import { MarcasService } from 'src/app/services/marcas.service';
import { DelegacionesService } from 'src/app/services/delegaciones.service';
import { SecuenciasService } from 'src/app/services/secuencias.service';
import { RncEstadoService } from 'src/app/services/rnc-estado.service';
import { AlertsService } from '../utils/alerts.service';

import { Dashboard } from 'src/app/core';
import { TipoCertificacion } from 'src/app/core/model/dashboard';
import { ModalGeneral } from 'src/app/core/model';

// ViewChild
import { SelectComponent } from '../../components/select/select.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild(SelectComponent) selectComponent: SelectComponent;

  // Modelo General
  modeloDatos: ModalGeneral = new ModalGeneral();

  // Datos Generales Del Contribuyente
  datos: Dashboard | undefined;
  tipoCertificacion: TipoCertificacion[];

  rnc: string;
  razonSocial: string;
  // ambienteID: number;
  // canalID: number;

  selectedTipoCertificacion: string | null;
  isSelectDisabled: boolean = true;
  datosTipo: any = [];

  // Datos: Marcas
  // datosMarcas: ModalGeneral;

  constructor(
    private DashboardServices: DashboardService,
    private MarcasServices: MarcasService,
    private DelegacionesServices: DelegacionesService, 
    private SecuenciasServices: SecuenciasService,
    private RncEstadoServices: RncEstadoService,
    private AlertServices: AlertsService
  ){}

  ngOnInit(){
    // this.obtenerMarcas(this.rnc,1,1);
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
            this.updateDatarncValidos(data);
            this.AlertServices.rncValido();
            this.obtenerMarcas(this.rnc, 1, 1);
            this.selectComponent.obtenerAmbiente();
            this.selectComponent.obtenerCanal();
          } else {
            this.AlertServices.rncInvalido();
            this.updateDataRncInvalidos();
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

  updateDataRncInvalidos() {
    this.rnc = '';
    this.razonSocial = '';
    this.tipoCertificacion = [];
    this.datosTipo = [];
    this.isSelectDisabled = true;
    this.modeloDatos.Marcas = [];
    this.selectComponent.datosAmbientes = [];
    this.selectComponent.datosCanal = [];
  }

  clearData() {
    if (!this.rnc) {
      this.razonSocial = '';
      this.tipoCertificacion = [];
      this.selectedTipoCertificacion = null;
      this.isSelectDisabled = true;
      this.datosTipo = [];
      this.modeloDatos.Marcas = [];
      this.selectComponent.datosAmbientes = [];
      this.selectComponent.datosCanal = [];
    }
  }

  getDatosTipoCertificacion() {
    this.datosTipo = this.tipoCertificacion.find(
    (tipoCert: { tipo: string | null}) => tipoCert.tipo === this.selectedTipoCertificacion
    );
  }

  // Obtener Marcas
  obtenerMarcas(rnc: string, ambienteID: number, canalID: number) {
    this.MarcasServices.getMarcas(rnc, ambienteID, canalID)
        .subscribe((data) => {
          this.modeloDatos.Marcas = data;
          // this.datosMarcas = this.modeloDatos;
          console.log(data);
        })
  }
}
