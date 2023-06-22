import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  rncNoIntroducido() {
    Swal.fire({
      icon: 'question',
      text: 'Aún no se ha introducido el RNC.',
      allowOutsideClick: false,
      allowEscapeKey: false
    });
  }

  rncValido() {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'El RNC ha sido ingresado correctamente.',
      timer: 1000,
      timerProgressBar: true,
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false
    });
  }

  rncInvalido() {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Se ha ingresado un RNC inválido.',
      timer: 1000,
      timerProgressBar: true,
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false
    });
  }
}
