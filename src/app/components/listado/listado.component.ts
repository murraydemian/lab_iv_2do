import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  @Output() onSelect = new EventEmitter<any>();

  public items: Array<any>;
  public seleccionado: any;

  constructor(
    private fire: AngularFirestore,
  ) { }

  ngOnInit(): void {
    this.fire.collection('mascotas').snapshotChanges()
    .subscribe( data => {
      this.items = [];
      data.forEach( (item) => {
        let temp: any = item.payload.doc.data();
        temp.docid = item.payload.doc.id;
        this.items.push(temp);
      });
    });
  }

  selecciona(e: any){
    this.onSelect.emit(e);
  }

}
