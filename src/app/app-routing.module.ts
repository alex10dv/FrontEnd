import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPersonaComponent } from './components/about-me/editar-persona/editar-persona.component';
import { NuevaPersonaComponent } from './components/about-me/nueva-persona/nueva-persona.component';
import { EditeducacionComponent } from './components/education/editeducacion.component';
import { NeweducacionComponent } from './components/education/neweducacion.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experience/new-experiencia.component';
import { EditarHysComponent } from './components/hardsoftsk/editar-hys.component';
import { NuevaHysComponent } from './components/hardsoftsk/nueva-hys.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/login/registro/registro.component';
import { EditProyectosComponent } from './components/proyects/edit-proyectos.component';
import { NewProyectoComponent } from './components/proyects/new-proyecto.component';


// ruteo
const routes: Routes = [
  {path:'', component: HomeComponent}, // cuando sea localhost:4200 entra aca
  {path:'login', component: LoginComponent},  // cuando sea localhost:4200\login entra aca
  {path:'nuevaexp',component:NewExperienciaComponent},
  {path: 'editexp/:id',component:EditExperienciaComponent},
  {path: 'nuevaedu',component: NeweducacionComponent},
  {path: 'editedu/:id',component:EditeducacionComponent},
  {path:'nuevopro',component:NewProyectoComponent},
  {path:'editProyectos/:id',component:EditProyectosComponent},
  {path: 'nuevahys', component: NuevaHysComponent},
  {path: 'editarhys/:id_Hys', component: EditarHysComponent},
  {path: 'nuevapersona', component: NuevaPersonaComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'editarpersona/:id_Persona', component: EditarPersonaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
