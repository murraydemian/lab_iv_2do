import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements OnInit {

  @Input() label: string;
  @Input() opciones: Array<string>;
  @Input() icono: string;
  @Input() hint: string;
  @Output() nuevoSeleccion = new EventEmitter<string>();

  public valor;

  constructor() { }

  ngOnInit(): void {
  }

  cambiaSeleccion(){
    this.nuevoSeleccion.emit(this.valor);
  }

}
