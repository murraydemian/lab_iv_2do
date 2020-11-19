import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner.service';
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
    private spinner: SpinnerService,
  ) { }

  ngOnInit(): void {
  }

  iniciarSesion(e: any){
    this.spinner.activate();
    this.sesion.iniciar(e.correo, e.clave)
    .then( (response: any) => {
      if(response.ok){
        setTimeout(() => {
          this.router.navigate(['']);
          this.spinner.deactivate();
        }, 500)
      } else {
        this.hintCorreo = response.mensajeCorreo;
        this.hintClave = response.mensajeClave;
        this.spinner.deactivate();
      }
    });
  }

}
