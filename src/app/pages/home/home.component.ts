import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public seleccion: any = null;
  public mod: boolean = false;

  constructor(
    private fire: AngularFirestore,
  ) { }

  ngOnInit(): void {
  }

  agregar(e: any){
    this.fire.collection('mascotas').add(e);
  }

  selecciona(e: any){
    this.mod = false;
    this.seleccion = null;
    this.seleccion = e;
    this.mod = true;
  }

}
