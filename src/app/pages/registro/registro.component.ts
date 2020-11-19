import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/services/sesion.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  public hintCorreo: string;
  public hintClave: string;
  public hintTipo: string;

  constructor(
    private sesion: SesionService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  registrar(e: any){
    if(this.verificarInputs(e)){
      this.sesion.registrar(e.correo, e.clave, e.tipo)
      .then( (response: any) => {
        if(response.ok){
          this.router.navigate(['login']);
        } else {
          this.hintCorreo = response.mensajeCorreo;
          this.hintClave = response.mensajeClave;
        }
      });
    }
  }
  
  verificarInputs(e: any){
    let pass = true;
    this.hintCorreo = "";
    this.hintClave = "";
    this.hintTipo = "";
    if(e.correo == ""){
      this.hintCorreo = 'Ingrese su correo';
      pass = false;
    }
    if(e.clave == ""){
      this.hintClave = "Ingrese su clave";
      pass = false;
    }
    if(e.tipo != "Administrador" && e.tipo != "Cliente"){
      this.hintTipo = "Seleccione tipo";
      pass = false;
    }
    return pass;
  }

}
