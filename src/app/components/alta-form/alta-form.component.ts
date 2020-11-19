import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alta-form',
  templateUrl: './alta-form.component.html',
  styleUrls: ['./alta-form.component.scss']
})
export class AltaFormComponent implements OnInit {

  @Input() perfil: string = "Administrador";
  @Input() data: any = null;
  @Input() modifica: boolean = false;
  @Output() nuevoItem = new EventEmitter<any>();


  public animales: Array<string> = ['Perro', 'Gato', 'Huron'];

  @Input() animal: string;
  public hintAnimal: string;

  @Input() raza: string;
  public hintRaza: string;

  @Input() nombre: string;
  public hintNombre: string;

  @Input() edad: number;
  public hintEdad: string;

  @Input() duenio: string;
  public hintDuenio: string;

  public foto: any;

  constructor() { }

  ngOnInit(): void {
    if(this.data != null){
      this.animal = this.data.animal;
      this.raza = this.data.raza;
      this.nombre = this.data.nombre;
      this.edad = this.data.edad;
      this.duenio = this.data.duenio;
    }
  }

  enNuevoItem(){
    if(this.verificarInputs()){
      let item: any = {
        animal: this.animal,
        raza: this.raza,
        nombre: this.nombre,
        edad: this.edad,
        duenio: this.duenio,
      };
      this.limpiarForm();
      this.nuevoItem.emit(item);
    }
  }

  limpiarForm(){
    this.animal = "";
    this.raza = "";
    this.nombre = "";
    this.edad = 0;
    this.duenio = "";
  }

  verificarInputs(){
    this.hintAnimal, this.hintDuenio, this.hintEdad, this.hintNombre, this.hintRaza = "";
    let ok = true;
    if(!this.animales.includes(this.animal)){ok = false; this.hintAnimal = "Seleccione una especie"}
    if(this.raza == ""){ok = false; this.hintRaza = "Raza invalida"}
    if(this.nombre == ""){ok = false; this.hintNombre = "Nombre invalido"}
    if(this.edad < 0){ok = false; this.hintNombre = "Nombre invalido"}
    if(this.duenio == ""){ok = false; this.hintDuenio = "Correo invalido"}
    return ok;
  }

}
