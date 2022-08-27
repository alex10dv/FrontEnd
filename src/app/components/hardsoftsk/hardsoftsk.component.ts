import { Component, OnInit } from '@angular/core';
import { Hysskills } from 'src/app/model/hysskills';
import { HysskillsService } from 'src/app/service/hysskills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hardsoftsk',
  templateUrl: './hardsoftsk.component.html',
  styleUrls: ['./hardsoftsk.component.css']
})
export class  HardsoftskComponent implements OnInit {

  hys: Hysskills[] = [];

  constructor(private hysskillsService: HysskillsService, private tokenSercive: TokenService) {}
   
  isLogged = false;
  
  ngOnInit(): void {
 
    this.cargarHys();
    if(this.tokenSercive.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarHys(): void{

    this.hysskillsService.listar().subscribe(data => {this.hys = data;})
  }
 
  delete(id_Hys?: number){
    if(id_Hys != undefined){
      this.hysskillsService.borrar(id_Hys).subscribe(
        data => {
          this.cargarHys();
        }, err =>{
          alert("Imposible borrar la habilidad,  no tiene permiso de Administrador");
        }
      )
    }
  }
}
