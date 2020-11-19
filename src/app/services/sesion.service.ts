import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  public estaLogueado: boolean = true;
  public componenteInicio: boolean = false;

  constructor(
    private auth: AngularFireAuth,
    private fire: AngularFirestore,
  ) {
    this.auth.user.subscribe(userData => {
      if(userData != null){
        this.estaLogueado = true;
      } else {
        this.estaLogueado = false;
      }
      this.componenteInicio = true;
    });
  }

  cerrar(){
    this.auth.signOut();
  }

  iniciar(correo: string, clave: string){
    return new Promise ( (resolve, reject) => {
      this.auth.signInWithEmailAndPassword(correo, clave)
      .then( response => {
        resolve(this.parsearResponse(response));
      })
      .catch( reason => {
        resolve(this.parsearReason(reason));
      });
    });
  }

  registrar(correo: string, clave: string, tipo: string){
    return new Promise( (resolve, reject) => {
      this.auth.createUserWithEmailAndPassword(correo, clave)
      .then( response => {
        let user: any = {
          correo: correo,
          perfil: tipo,
        }
        this.fire.collection('usuarios').add(user)
        .then( (foo) => {
          resolve(this.parsearResponse(response));
        });
      })
      .catch( reason => {
        let r = this.parsearReason(reason);
        resolve(r);
      });
    });
  }

  verificar(): Promise<boolean>{
    return new Promise( (resolve, reject) => {
      this.auth.user.subscribe( userData => {
        if(userData != null){
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  perfil(correo: string){
    return new Promise( (resolve) => {
      this.fire.collection('usuarios', ref => ref.where('correo', '==', correo))
      .get().subscribe( userList => {
        if(userList.docs.length > 0){
          resolve((<any>userList.docs[0].data()).perfil);
        }else{
          resolve(null);
        }
      });
    });
  }

  private parsearResponse(response){
    let respuestaItem: any = {
      ok: true,
      correo: response.user.email,
    };
    return respuestaItem;
  }

  private parsearReason(reason){
    let respuestaItem: any = {
      ok: false,
      mensajeCorreo: '',
      mensajeClave: ''
    };
    switch(reason.code){
      case "auth/email-already-in-use":
        respuestaItem.mensajeCorreo = "El correo ya esta en uso";
        break;
      case "auth/invalid-email":
        respuestaItem.mensajeCorreo = "El correo es invalido";
        break;
      case "auth/weak-password":
        respuestaItem.mensajeClave = "La clave es muy debil";
        break;
      case "auth/user-not-found":
        respuestaItem.mensajeCorreo = "El usuario no existe";
        break;
      case "auth/wrong-password":
        respuestaItem.mensajeClave = "Clave incorrecta";
        break;
    }
    return respuestaItem;
  }
}
