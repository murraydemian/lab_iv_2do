import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  @Output() onSelect = new EventEmitter<any>();
  @Input() tipo: string = "materias";
  @Input() alumno: string = null;

  public items: Array<any>;
  public seleccionado: any;

  constructor(
    private fire: AngularFirestore,
    private spinner: SpinnerService,
  ) { }

  ngOnInit(): void {
    if(this.tipo == "materias"){
      this.traerMaterias();
    } else if( this.tipo == "alumnos"){
      if(this.alumno != null){
        this.traerAlumnos(this.alumno);
      } else {
        this.traerAlumnos();
      }
    }
  }

  selecciona(e: any){
    this.onSelect.emit(e);
  }

  traerMaterias(){
    this.fire.collection(this.tipo).snapshotChanges()
    .subscribe( data => {
      this.items = [];
      data.forEach( (item) => {
        let temp: any = item.payload.doc.data();
        temp.docid = item.payload.doc.id;
        this.items.push(temp);
      });
      this.spinner.deactivate();
    });
  }
  traerAlumnos(correo: string = null){
    this.fire.collection('usuarios', ref => ref.where('perfil', '==', 'Alumno')).snapshotChanges()
    .subscribe( data => {
      this.items = [];
      data.forEach( (item: any) => {
        if(correo != null){
          if(item.payload.doc.data().correo == correo){
            let temp: any = item.payload.doc.data();
            temp.docid = item.payload.doc.id;
            this.items.push(temp);
          }
        } else {
          let temp: any = item.payload.doc.data();
          temp.docid = item.payload.doc.id;
          this.items.push(temp);
        }
      });
      this.spinner.deactivate();
    });
  }

}
