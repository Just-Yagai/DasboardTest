import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { DelegacionesComponent } from './components/delegaciones/delegaciones.component';
import { SecuenciasComponent } from './components/secuencias/secuencias.component';
import { RncEstadoComponent } from './components/rnc-estado/rnc-estado.component';
import { SelectComponent } from './components/select/select.component';
import { LoginComponent } from './pages/login/login.component';

//MATERIAL ANGULAR
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    DashboardComponent,
    MarcasComponent,
    DelegacionesComponent,
    SecuenciasComponent,
    RncEstadoComponent,
    SelectComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ]
})
export class HomeModule { }
