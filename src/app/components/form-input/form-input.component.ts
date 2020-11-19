import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  @Output() cambiaValor = new EventEmitter<string>();
  @Input() label: string;
  @Input() placeholder: string;
  @Input() tipo: string;
  @Input() icono: string;
  @Input() hint: string;

  @Input() valor: string;

  constructor() { }

  ngOnInit(): void {
  }
  
  enCambiaValor(){
    this.cambiaValor.emit(this.valor);
  }

}
