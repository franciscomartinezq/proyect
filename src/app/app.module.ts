import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginPComponent } from './components/login-p/login-p.component';
import { NotasComponent } from './components/notas/notas.component';
import { CajaComponent } from './components/caja/caja.component';
import { QuienComponent } from './components/quien/quien.component';
import { IprofeComponent } from './components/iprofe/iprofe.component';
import { IalumnoComponent } from './components/ialumno/ialumno.component';
import { ProfesorComponent } from './components/profesor/profesor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPComponent,
    NotasComponent,
    CajaComponent,
    QuienComponent,
    IprofeComponent,
    IalumnoComponent,
    ProfesorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
