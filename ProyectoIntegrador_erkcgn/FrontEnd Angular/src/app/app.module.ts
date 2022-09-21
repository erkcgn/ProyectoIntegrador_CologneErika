
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { LogrosComponent } from './componentes/logros/logros.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NewlogroComponent } from './componentes/logros/newlogro.component';
import { EditlogroComponent } from './componentes/logros/editlogro.component';
import { HomeRutasComponent } from './componentes/home-rutas/home-rutas.component';
import { PersonaService } from './service/persona.service';
import { TokenService } from './service/token.service';
import { AuthService } from './service/auth.service';
import { ProyectoService } from './service/proyecto.service';
import { EducacionService } from './service/educacion.service';
import { InterceptorService } from './service/interceptor-service';
import { SExperienciaService } from './service/experiencia.service';
import { EditSkillComponent } from './componentes/aptitudes/edit-skill.component';
import { NewSkillComponent } from './componentes/aptitudes/new-skill.component';
import { SkillService } from './service/skill.service';
import { NewAcercaDeComponent } from './componentes/acerca-de/new-acerca-de.component';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    AptitudesComponent,
    IniciarSesionComponent,
    LogrosComponent,
    ExperienciaComponent,
    EducacionComponent,
    FooterComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    NewlogroComponent,
    EditlogroComponent,
    HomeRutasComponent,
    EditSkillComponent,
    NewSkillComponent,
    NewAcercaDeComponent,
    EditAcercaDeComponent,
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,    
  ],
  providers: [
    PersonaService, 
    TokenService, 
    AuthService, 
    ProyectoService, 
    EducacionService, 
    InterceptorService,
    SExperienciaService,
    SkillService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
