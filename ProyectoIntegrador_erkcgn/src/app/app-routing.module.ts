import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';

import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { LogrosComponent } from './componentes/logros/logros.component';

const routes: Routes = [
  {path: '', component: EncabezadoComponent},
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  {path: 'acerca-de', component: AcercaDeComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'educacion', component: EducacionComponent},  
  {path: 'aptitudes', component: AptitudesComponent},
  {path: 'aptitudes', component: AptitudesComponent},
  {path: 'logros', component: LogrosComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
