import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public seleccion: any = null;
  public seleccionAlumno: any = null;
  public mod: boolean = false;
  public administrador: boolean = false;

  constructor(
    private fire: AngularFirestore,
    private sesion: SesionService,
    private auth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
    this.auth.user.subscribe( data => {
      if(data != null){
        this.sesion.perfil(data.email).then( perfil => {
          this.administrador = perfil == "Administrador";
        })
      }
    })
  }

  agregar(e: any){
    this.fire.collection('materias').add(e);
  }

  selecciona(e: any){
    this.seleccion = null;
    this.seleccion = e;
    //console.log(this.seleccion, this.seleccionAlumno);
  }
  seleccionaAlumno(e: any){
    this.seleccionAlumno = null;
    this.seleccionAlumno = e;
  }

  asignado(e){
    this.seleccion = null;
    this.seleccionAlumno = null;
  }

}
