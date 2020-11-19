import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.scss']
})
export class RegistroFormComponent implements OnInit {

  @Output() nuevoRegistro = new EventEmitter<any>();
  @Input() hintCorreo: string;
  @Input() hintClave: string;
  @Input() hintTipo: string;

  public correo: string = '';
  public clave: string = '';
  public tipo: string;

  constructor() { }

  ngOnInit(): void {
  }

  limpiarForm(){
    this.correo = '';
    this.clave = '';
  }

  emitirNuevoRegistro(){
    let item = {
      correo: this.correo,
      clave: this.clave,
      tipo: this.tipo,
    }
    this.nuevoRegistro.emit(item);
  }

}
