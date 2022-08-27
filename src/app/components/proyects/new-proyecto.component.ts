import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/service/s-proyectos.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreE:string='';
  descripcionE: string='';
  urlimg:string='';

  constructor(private sProyectos: SProyectosService, private router: Router) { }

  ngOnInit(): void {
  }
 
  onCreate():void{
    const pro = new Proyectos(this.nombreE, this.descripcionE, this.urlimg);
    this.sProyectos.save(pro).subscribe(data => {alert("Proyecto agregado");
  this.router.navigate(['']);},err =>{alert("Error");
  this.router.navigate(['']);})
  }
   
}
