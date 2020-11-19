import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public hintCorreo: string;
  public hintClave: string;

  constructor(
    private sesion: SesionService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  iniciarSesion(e: any){
    this.sesion.iniciar(e.correo, e.clave)
    .then( (response: any) => {
      if(response.ok){
        this.router.navigate(['']);
      } else {
        this.hintCorreo = response.mensajeCorreo;
        this.hintClave = response.mensajeClave;
      }
    });
  }

}
