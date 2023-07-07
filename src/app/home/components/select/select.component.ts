import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Marcas, ModeloFilter, Secuencias } from 'src/app/core';
import { ModeloGeneral } from 'src/app/core/model/general';
import { TiposECF } from 'src/app/core/model/utils/tipoECF';
import { SelectService } from 'src/app/services/select.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  // Modelo General
  modeloDatos: ModeloGeneral = new ModeloGeneral();

  // Input y Output
  @Input() e_CF: boolean;
  @Input() SelectDisabled: boolean;
  @Input() FiltradoGeneral: ModeloFilter;
  @Output() DatosFiltrados = new EventEmitter<ModeloFilter>();

  // Datos Generales
  ambienteID: number;
  canalID: number;
  TipoECF: number;
  

  // Datos: Ambiente y Canal
  datosAmbientes: any[];
  datosCanal: any[];
  datosTipoECF: TiposECF[] = [];

  constructor(private SelectServices: SelectService) {
    this.e_CF = false;
  }

  ngOnInit() {
    this.obtenerAmbiente();
    this.obtenerCanal();
    this.obtenerTipoECF();
  }

  obtenerAmbiente() {
    this.SelectServices.getAmbiente()
      .subscribe((data) => {
        this.datosAmbientes = data;
        console.log(this.datosAmbientes)
      });
  }

  obtenerCanal() {
    this.SelectServices.getCanal()
      .subscribe((data) => {
        this.datosCanal = data;
        console.log(this.datosAmbientes)
      });
  }

  obtenerTipoECF() {
    this.SelectServices.getTipoECF()
      .subscribe((data) => {
        this.datosTipoECF = data;
        this.datosTipoECF.unshift({id: 0, nombre: 'Todos'});
        // console.log(this.datosTipoECF);
      });
  }

  onAmbienteChange(value: string) {
    this.ambienteID = parseInt(value);
    this.FiltradoGeneral.ambienteID = this.ambienteID;
    this.DatosFiltrados.emit(this.FiltradoGeneral);
    console.log(this.DatosFiltrados)
  }

  onCanalChange(value: string) {
    this.canalID = parseInt(value);
    this.FiltradoGeneral.canalID = this.canalID;
    this.DatosFiltrados.emit(this.FiltradoGeneral);
    console.log(this.DatosFiltrados)
  }

  onTipoECF(value: string) {
    this.TipoECF = parseInt(value);
    this.FiltradoGeneral.TipoECF = this.TipoECF;
    this.DatosFiltrados.emit(this.FiltradoGeneral);
  }
}
