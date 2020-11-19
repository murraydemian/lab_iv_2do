import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Forms Module. Importante
 */
import { FormsModule } from '@angular/forms';

/**
 * Angular Material imports
 */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs'; 
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

/**
 * Angular Fire imports
 */
import { AngularFireModule } from '@angular/fire';
import { firebaseConfig } from './firebase.config';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroFormComponent } from './components/registro-form/registro-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { AltasComponent } from './pages/altas/altas.component';
import { MailDisplayComponent } from './components/mail-display/mail-display.component';
import { HomeComponent } from './pages/home/home.component';
import { AltaFormComponent } from './components/alta-form/alta-form.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { ListadoComponent } from './components/listado/listado.component';
import { ItemListadoComponent } from './components/listado/item-listado/item-listado.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
    RegistroFormComponent,
    LoginFormComponent,
    FormInputComponent,
    AltasComponent,
    MailDisplayComponent,
    HomeComponent,
    AltaFormComponent,
    FormSelectComponent,
    ListadoComponent,
    ItemListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //Forms Module
    FormsModule,

    //Angular Material
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    DragDropModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,

    //Angular Fire
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
