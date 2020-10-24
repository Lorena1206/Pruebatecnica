import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MunicipiosComponent } from './municipios/municipios.component';
import { HttpClientModule } from '@angular/common/http';
import { InstitucionesComponent } from './instituciones/instituciones.component';
import { SedesComponent } from './sedes/sedes.component';
import { GruposComponent } from './grupos/grupos.component';
import { InformacionComponent } from './informacion/informacion.component';

@NgModule({
  declarations: [
    AppComponent,
    MunicipiosComponent,
    InstitucionesComponent,
    SedesComponent,
    GruposComponent,
    InformacionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
