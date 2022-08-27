import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = null;

  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(data =>{
      this.expLab = data;
    }, err => {   // en caso de error se redirecciona
      alert("Error en modificación de la experiencia se requieren permisos de administrador");
      this.router.navigate(['']);
    })

  }
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id']; // captura el id de la experiencia a modificar
    this.sExperiencia.update(id, this.expLab).subscribe(data => {
      this.router.navigate(['']);
    }, err => { // en caso de error se redirecciona
      alert("Error en modificación de la experiencia se requieren permisos de administrador");
      this.router.navigate(['']);
    }
    )
  }
}
