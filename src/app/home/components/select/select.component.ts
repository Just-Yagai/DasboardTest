import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Marcas } from 'src/app/core';
import { ModalGeneral } from 'src/app/core/model';
import { MarcasService } from 'src/app/services/marcas.service';
import { SelectService } from 'src/app/services/select.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  // Modelo General
  modeloDatos: ModalGeneral = new ModalGeneral();

  // Input y Output
  @Input() e_CF: boolean;
  @Input() SelectDisabled: boolean;
  @Output() dataFilterMarcas = new EventEmitter<Marcas[]>();

  // Datos Generales
  ambienteID: number;
  canalID: number;

  datosAmbientes: any[];
  datosCanal: any[];

  // Datos para filtrar
  datosMarcasFilter: Marcas[] = [];
  
  constructor(
    private SelectServices: SelectService,
    private MarcasServices: MarcasService) {}

  ngOnInit() {}

  obtenerAmbiente(){
    this.SelectServices.getAmbiente(this.ambienteID, this.canalID)
        .subscribe((data) => {
          this.datosAmbientes = data;
        });
  }

  obtenerCanal(){
    this.SelectServices.getCanal(this.ambienteID, this.canalID)
        .subscribe((data) => {
          this.datosCanal = data;
        });
  }

  onAmbienteChange(value: string) {
    this.ambienteID = parseInt(value); 
    this.filterMarcas();
  }
  
  onCanalChange(value: string) {
    this.canalID = parseInt(value);
    this.filterMarcas();
  }

  // Obtener Marcas para filtrado
  obtenerMarcasFilter(rnc: string) {
    this.MarcasServices.getMarcasFilter(rnc)
        .subscribe((data) => {
          this.datosMarcasFilter = data;
        })
  }

  filterMarcas() {
    let filtradoByMarcas: Marcas[] = [];
    
    if (this.ambienteID && this.canalID) {
      filtradoByMarcas = this.datosMarcasFilter.filter((marca: { ambienteID: number; canalID: number; }) => 
        marca.ambienteID === this.ambienteID &&
        marca.canalID === this.canalID
      );
    } else if (this.ambienteID) {
      filtradoByMarcas = this.datosMarcasFilter.filter((marca: { ambienteID: number; }) => marca.ambienteID === this.ambienteID);
    } else if (this.canalID) {
      filtradoByMarcas = this.datosMarcasFilter.filter((marca: { canalID: number; }) => marca.canalID === this.canalID);
    }
    this.dataFilterMarcas.emit(filtradoByMarcas);
    console.log(filtradoByMarcas);
  }
}
