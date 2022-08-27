import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/service/s-proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {
  pro: Proyectos = null;

  constructor(private sProyectos: SProyectosService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyectos.detail(id).subscribe(data =>{
      this.pro = data;
    }, err => {   // en caso de error se redirecciona
      alert("Error en modificación del proyecto se requieren permisos de administrador");
      this.router.navigate(['']);
    })

  }
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id']; // captura el id del proyecto a modificar
    this.sProyectos.update(id, this.pro).subscribe(data => {
      this.router.navigate(['']);
    }, err => { // en caso de error se redirecciona
      alert("Error en modificación del proyecto se requieren permisos de administrador");
      this.router.navigate(['']);
    }
    )
  }
}