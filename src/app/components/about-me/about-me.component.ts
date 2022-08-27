import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  personas: Persona[] = [];
  
  constructor(private personaService: PersonaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }

  cargarPersona(): void{

    this.personaService.listar().subscribe(data => {this.personas = data;})
  }

  delete(id_Persona?: number){

    if(id_Persona != undefined){
      this.personaService.borrar(id_Persona).subscribe(
        data => {
          this.cargarPersona();
        }, err =>{
          alert("No es posible borrar la persona seleccionada, necesita permiso de Administrador");
        }
      )
    }
  } 
}

