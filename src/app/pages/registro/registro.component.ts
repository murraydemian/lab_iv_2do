import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/services/sesion.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { EmailVerifierService } from '../../services/email-verifier.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  @Input() center: boolean = true;

  public hintCorreo: string;
  public hintClave: string;
  public hintTipo: string;

  constructor(
    private sesion: SesionService,
    private router: Router,
    private spinner: SpinnerService,
  ) { }

  ngOnInit(): void {
  }

  registrar(e: any){
    if(this.verificarInputs(e)){
      this.spinner.activate();
      this.sesion.registrar(e.correo, e.clave, e.tipo)
      .then( (response: any) => {
        if(response.ok){
          this.sesion.cerrar();
          this.router.navigate(['login']);
        } else {
          this.hintCorreo = response.mensajeCorreo;
          this.hintClave = response.mensajeClave;
        }
        this.spinner.deactivate();
      });
    }
  }
  
  verificarInputs(e: any){
    let pass = true;
    this.hintCorreo = "";
    this.hintClave = "";
    this.hintTipo = "";
    if(!EmailVerifierService.verifyEmailFormat(e.correo)){
      this.hintCorreo = 'Ingrese un correo valido';
      pass = false;
    }
    if(e.clave == ""){
      this.hintClave = "Ingrese su clave";
      pass = false;
    }
    if(e.tipo != "Alumno" && e.tipo != "Profesor"){
      this.hintTipo = "Seleccione tipo";
      pass = false;
    }
    return pass;
  }

}
