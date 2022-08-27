import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})
export class LogoAPComponent implements OnInit {
  isLogged= false;
 
  constructor(private router:Router, private tokenService: TokenService) { }  // para que funcione el boton login

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.isLogged =true; // si obtiene el token esta logeado 
     }else{
       this.isLogged = false;
     }
    }
  
    onLogOut():void{
     this.tokenService.logOut();
     window.location.reload();
    }


login(){
  this.router.navigate(['/login']) // funcion para logueo que se implementa en el html de este componente logo
}

}
