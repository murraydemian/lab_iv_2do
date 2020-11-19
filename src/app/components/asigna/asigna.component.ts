import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-asigna',
  templateUrl: './asigna.component.html',
  styleUrls: ['./asigna.component.scss']
})
export class AsignaComponent implements OnInit {

  @Input() alumno: any = null;
  @Input() materia: any = null;
  @Output() nuevoAsignado = new EventEmitter<boolean>();

  constructor(
    private fire : AngularFirestore
  ) { }

  ngOnInit(): void {
  }

  asignar(){
    if(this.materia.alumnos){
      if(this.materia.cupo > this.materia.alumnos.lenght){
        if(!this.materia.alumnos.includes(this.alumno)){
          this.materia.alumnos.push(this.alumno.correo);
          this.fire.firestore.collection('materias').doc(this.materia.docid)
          .update({alumnos: this.materia.alumnos});
          this.nuevoAsignado.emit(true);
        } else {
          this.nuevoAsignado.emit(false);
        }
      } else {
        this.nuevoAsignado.emit(false);
      }
    } else{
      this.fire.firestore.collection('materias').doc(this.materia.docid)
      .update({alumnos: [this.alumno.correo]});
      this.nuevoAsignado.emit(true);
    }
  }

}
