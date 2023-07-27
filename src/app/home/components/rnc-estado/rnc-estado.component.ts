import { Component, Input } from '@angular/core';
import { RncEstadoService } from 'src/app/services/rnc-estado.service';

@Component({
  selector: 'app-rnc-estado',
  templateUrl: './rnc-estado.component.html',
  styleUrls: ['./rnc-estado.component.css']
})
export class RncEstadoComponent {

  @Input() RNCEstadoDatos: any[];

  constructor(private RncServices: RncEstadoService) {}

  ngOnInit() {}

  editingRow: number = -1; // -1 indicates no row is being edited
  originalData: any = {}; 
  lista: string[] = ["✓", "X"];
  listaEstado: string[] = ["Activo", "Inactivo"];

  buttonStates: boolean[][] = [
    [false, false], 
    [false, false], 
    [false, false], 
    [false, false],
  ];

  selectButton(rowIndex: number, columnIndex: number, value: boolean) {
    this.buttonStates[columnIndex][rowIndex] = value;
  }

  selectOption(row: any, field: string, value: string) {
    row[field] = value === 'si' ? '✓' : 'X';
  }
  

  saveChanges(rncEstado:any ){
    this.editingRow = -1;

    this.RncServices.updaterncEstado(rncEstado)
    .subscribe(data => {
        console.log(data);
      }
    )
  }

  startEditing(index: number) {
    this.editingRow = index;
    this.originalData[index] = { ...this.RNCEstadoDatos[index] };
  }

  cancelEditing() {
    this.RNCEstadoDatos[this.editingRow] = { ...this.originalData[this.editingRow] };
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
