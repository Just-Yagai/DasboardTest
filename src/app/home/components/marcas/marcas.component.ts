import { Component, Input, OnInit } from '@angular/core';
import { Marcas } from 'src/app/core';
import { MarcasService } from 'src/app/services/marcas.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {
  
  @Input() MarcasDatos: any[];

  constructor(private MarceServices: MarcasService) {}

  ngOnInit() {}

  cambiarEstado(marca: any) {
    if (marca.estado === 'Disponible') {
      marca.estado = 'No disponible';
    } else {
      marca.estado = 'Disponible';
    }

    this.MarceServices.updateMarca(marca)
      .subscribe(resp => {
        console.log(resp);
      });
  }
}

// Probando el cambios de prueba a master