import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectService } from 'src/app/services/select.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() e_CF: boolean;
  @Input() SelectDisabled: boolean;

  ambienteID: number;
  canalID: number;

  datosAmbientes: any[];
  datosCanal: any[];
  
  constructor(private SelectServices: SelectService) {}

  ngOnInit() {
    // this.obtenerAmbiente();
    // this.obtenerCanal();
  }

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
    // this.filterMarcas();
  }
  
  onCanalChange(value: string) {
    this.canalID = parseInt(value);
    // this.filterMarcas();
  }
}
