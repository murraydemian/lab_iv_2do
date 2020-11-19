import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mail-display',
  templateUrl: './mail-display.component.html',
  styleUrls: ['./mail-display.component.scss']
})
export class MailDisplayComponent implements OnInit {

  public correo: string;
  public mostrar: boolean = false;

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.auth.user.subscribe( userData => {
      if(userData != null){
        this.mostrar = true;
        this.correo = '[ ' + userData.email + ' ][ Cerrar ]';
      } else {
        this.mostrar = false;
        this.correo = '';
      }
    });
  }
  cerrarSesion(){
    this.auth.signOut();
    this.router.navigate(['login']);
  }

}
