import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

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


  public profesores: Array<string> = [];
  public cuatrimestres: Array<string> = ['Primero', 'Segundo', 'Tercero', 'Cuarto'];

  @Input() cuatrimestre: string;
  public hintCuatrimestre: string;

  @Input() anio: string;
  public hintAnio: string;

  @Input() nombre: string;
  public hintNombre: string;

  @Input() cupo: number;
  public hintCupo: string;

  @Input() profesor: string;
  public hintProfesor: string;


  constructor(
    private fire: AngularFirestore
  ) { }

  ngOnInit(): void {
    if(this.data != null){
      this.nombre = this.data.nombre;
      this.cuatrimestre = this.data.cuatrimestre;
      this.cupo = this.data.cupo;
      this.profesor = this.data.profesor;
      this.anio = this.data.anio;
    }
    this.fire.collection('usuarios', ref => ref.where('perfil', '==', 'Profesor'))
    .valueChanges().subscribe( userList => {
      this.profesores = [];
      userList.forEach( (item: any) => {
        this.profesores.push( item.correo );
      });
    });
  }

  enNuevoItem(){
    if(this.verificarInputs()){
      let item: any = {
        nombre: this.nombre,
        cuatrimestre: this.cuatrimestre,
        cupo: this.cupo,
        profesor: this.profesor,
        anio: this.anio,
      };
      this.limpiarForm();
      this.nuevoItem.emit(item);
    }
  }

  limpiarForm(){
    this.nombre = "";
    this.cuatrimestre = "";
    this.anio = "";
    this.cupo = 0;
    this.profesor = "";
  }

  verificarInputs(){
    this.hintNombre, this.hintCuatrimestre, this.hintCupo, this.hintAnio, this.hintProfesor = "";
    let ok = true;
    //console.log(this.profesor, this.cuatrimestre);
    if(!this.profesores.includes(this.profesor)){ok = false; this.hintProfesor = "Seleccione un profesor"}
    if(!this.cuatrimestres.includes(this.cuatrimestre)){ok = false; this.hintCuatrimestre = "Seleccione cuatrimestre"}
    if(this.nombre == ""){ok = false; this.hintNombre = "Nombre invalido"}
    if(this.cupo < 0){ok = false; this.hintCupo = "Cupo invalido"}
    if(this.anio == ""){ok = false; this.hintAnio = "Año invalido"}
    return ok;
  }

}
