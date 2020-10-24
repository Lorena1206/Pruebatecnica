import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MunicipiosComponent } from './municipios/municipios.component';
import { InstitucionesComponent } from './instituciones/instituciones.component';
import { SedesComponent } from './sedes/sedes.component';
import { GruposComponent } from './grupos/grupos.component';
import { InformacionComponent } from './informacion/informacion.component';



const routes: Routes = [
  { path: '', component: MunicipiosComponent },
  { path: 'instituciones/:municipio', component: InstitucionesComponent },
  { path: 'sedes/:instituciones', component: SedesComponent },
  { path: 'grupos/:sedes', component: GruposComponent },
  { path: 'informacion/:grupos', component: InformacionComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
