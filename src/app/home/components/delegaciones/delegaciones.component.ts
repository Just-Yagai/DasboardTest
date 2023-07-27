import { Component, Input, OnInit } from '@angular/core';
import { DelegacionesService } from 'src/app/services/delegaciones.service';

@Component({
  selector: 'app-delegaciones',
  templateUrl: './delegaciones.component.html',
  styleUrls: ['./delegaciones.component.css']
})
export class DelegacionesComponent implements OnInit {

  @Input() DelegacionesDatos: any[];

  constructor( private DelegacionesServices: DelegacionesService) {}

  ngOnInit() {}

  // Seleccionar opciones entre ["✓", "X"]
  editingRow: number = -1; // -1 indica que no se está editando ninguna fila
  originalData: any = {};
  listStatus: string[] = ["Activo", "Inactivo"];

  buttonStates: boolean[][] = [
    [false, false],   // Columna de firmanteAutorizado
    [false, false],   // Columna de solicitanteAutorizado
    [false, false],   // Columna de aprobadorComercial
    [false, false]    // Columna de administrador
  ];

  selectButton(rowIndex: number, columnIndex: number, value: boolean) {
    this.buttonStates[columnIndex][rowIndex] = value;
  }

  selectOption(row: any, field: string, value: string) {
    row[field] = value === 'si' ? '✓' : 'X';
  }

  // Funciones confirmar seleccion
  // isFirmanteAutorizadoSelected: boolean = false;

  // selectFirmanteAutorizado(value: boolean) {
  //   this.isFirmanteAutorizadoSelected = value;
  // }

  // isSolicitanteAutorizadoSelected: boolean = false;

  // selectSolicitanteAutorizado(value: boolean) {
  //   this.isSolicitanteAutorizadoSelected = value;
  // }

  // isAprobadorComercialSelected: boolean = false;

  // selectAprobadorComercial(value: boolean) {
  //   this.isAprobadorComercialSelected = value;
  // }

  // isAdministradorSelected: boolean = false;

  // selectAdministrador(value: boolean){
  //   this.isAdministradorSelected = value;
  // }

  startEditing(index: number) {
    this.editingRow = index;
    this.originalData[index] = { ...this.DelegacionesDatos[index] };
  }

  saveChanges(delegaciones: any){
    this.editingRow = -1;

    this.DelegacionesServices.updateDelegaciones(delegaciones)
    .subscribe(resp => {
      console.log(resp);
    });
  }

  cancelEditing() {
    this.DelegacionesDatos[this.editingRow] = { ...this.originalData[this.editingRow] };
    this.editingRow = -1;
  }

  // Modal Ver mas Informacion
  rncModal: string = '';
  fechaRegistroModal: string = '';
  fechaActualizacionModal: string = '';
  identificacionModal: string = '';

  setRncModal(rnc: string) {
    this.rncModal = rnc;
  }

  setFechaRegistro(fechaRegistro: string) {
    this.fechaRegistroModal = fechaRegistro;
  }

  setFechaActualizacion(fechaActualizacion: string) {
    this.fechaActualizacionModal = fechaActualizacion;
  }

  setIdentificacion(identificacion: string) {
    this.identificacionModal = identificacion;
  } 
}
