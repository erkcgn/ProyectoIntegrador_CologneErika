import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSkillComponent } from './componentes/aptitudes/edit-skill.component';
import { NewSkillComponent } from './componentes/aptitudes/new-skill.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';

import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { HomeRutasComponent } from './componentes/home-rutas/home-rutas.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { EditlogroComponent } from './componentes/logros/editlogro.component';
import { NewlogroComponent } from './componentes/logros/newlogro.component';

const routes: Routes = [
  {path: '', component: HomeRutasComponent},  
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},  
  {path: 'editexp/:id', component: EditExperienciaComponent},   
  {path: 'nuevaedu', component: NeweducacionComponent},  
  {path: 'editedu/:id', component: EditeducacionComponent},  
  {path: 'newlogro', component: NewlogroComponent},
  {path: 'editlogro/:id', component: EditlogroComponent},
  {path: 'newskill', component: NewSkillComponent},
  {path: 'editskill/:id', component: EditSkillComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
