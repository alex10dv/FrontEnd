import { Component, OnInit } from '@angular/core';
import { SProyectosService } from 'src/app/service/s-proyectos.service';
import { Proyectos} from 'src/app/model/proyectos';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  pro: Proyectos[] = [];
  constructor(private sProyectos: SProyectosService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos(); // carga la proyecto y valida el token
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarProyectos(): void {
    this.sProyectos.lista().subscribe(data => { this.pro = data; })
  }
  borrar(id?: number) {
    if (id != undefined) {
      this.sProyectos.delete(id).subscribe(data => { this.cargarProyectos(); },
        err => {
          alert("Error al borrar el Proyecto !!!");
        })
    }
  }

}