import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Verifica si el usuario tiene el token almacenado en el localStorage
    const token = localStorage.getItem('token');

    if (token) {
      return true; // Permite el acceso a la ruta
    } else {
      // Si no tiene el token, redirige al usuario a la página de inicio de sesión
      this.router.navigate(['/home/login']);
      return false; // Bloquea el acceso a la ruta
    }
  }
}
