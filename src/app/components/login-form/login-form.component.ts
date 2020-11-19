import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output() nuevoRegistro = new EventEmitter<any>();
  @Input() hintCorreo: string;
  @Input() hintClave: string;

  public correo: string;
  public clave: string;
  public tipo: "Administrador" | "Cliente";

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  limpiarForm(){
    this.correo = '';
    this.clave = '';
  }

  nuevoInicioSesion(){    
    let item: any = {
      correo: this.correo,
      clave: this.clave,
      tipo: this.tipo,
    }
    this.nuevoRegistro.emit(item);
  }

  inicioRapido(){
    this.correo = "murraydemian@gmail.com";
    this.clave = "123456";
    this.nuevoInicioSesion();
  }

  registro(){
    this.router.navigate(['registro']);
  }

}
