import { Component, OnInit } from '@angular/core';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { Experiencia } from 'src/app/model/experiencia';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  expe: Experiencia[] = [];
  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia(); // carga la experiencia y valida el token
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { this.expe = data; })
  }
  borrar(id?: number) {
    if (id != undefined) {
      this.sExperiencia.delete(id).subscribe(data => { this.cargarExperiencia(); },
        err => {
          alert("Error al borrar experiencia !!!");
        })
    }
  }

}


