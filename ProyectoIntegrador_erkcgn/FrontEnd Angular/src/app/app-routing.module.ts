import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';

import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { EditlogroComponent } from './componentes/logros/editlogro.component';
import { LogrosComponent } from './componentes/logros/logros.component';
import { NewlogroComponent } from './componentes/logros/newlogro.component';

const routes: Routes = [
  {path: '', component: EncabezadoComponent},
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  {path: 'acerca-de', component: AcercaDeComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},  
  {path: 'educacion', component: EducacionComponent},  
  {path: 'nuevaedu', component: NeweducacionComponent},  
  {path: 'editedu/:id', component: EditeducacionComponent},  
  {path: 'aptitudes', component: AptitudesComponent},
  {path: 'aptitudes', component: AptitudesComponent},
  {path: 'logros', component: LogrosComponent},
  {path: 'newlogro', component: NewlogroComponent},
  {path: 'editlogro/:id', component: EditlogroComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
