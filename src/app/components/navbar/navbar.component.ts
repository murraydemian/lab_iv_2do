import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public correo: string;
  public mostrar: false;

  constructor(
    private auth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
  }
}
