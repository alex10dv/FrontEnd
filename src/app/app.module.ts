import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';

import { BannerComponent } from './components/banner/banner.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import {NgCircleProgressModule } from 'ng-circle-progress';
import { HardsoftskComponent } from './components/hardsoftsk/hardsoftsk.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experience/new-experiencia.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';
import { NeweducacionComponent } from './components/education/neweducacion.component';
import { EditeducacionComponent } from './components/education/editeducacion.component';
import { NewProyectoComponent } from './components/proyects/new-proyecto.component';
import { EditProyectosComponent } from './components/proyects/edit-proyectos.component';
import { NuevaHysComponent } from './components/hardsoftsk/nueva-hys.component';
import { EditarHysComponent } from './components/hardsoftsk/editar-hys.component';
import { NuevaPersonaComponent } from './components/about-me/nueva-persona/nueva-persona.component';
import { EditarPersonaComponent } from './components/about-me/editar-persona/editar-persona.component';
import { RegistroComponent } from './components/login/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    HardsoftskComponent,
    ProyectsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    NewProyectoComponent,
    EditProyectosComponent,
    NuevaHysComponent,
    EditarHysComponent,
    NuevaPersonaComponent,
    EditarPersonaComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
