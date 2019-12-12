import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginPComponent } from './components/login-p/login-p.component';
import { NotasComponent } from './components/notas/notas.component';
import { CajaComponent } from './components/caja/caja.component';
import { QuienComponent } from './components/quien/quien.component';
import { IprofeComponent } from './components/iprofe/iprofe.component';
import { IalumnoComponent } from './components/ialumno/ialumno.component';
import { ProfesorComponent } from './components/profesor/profesor.component';

const appRoutes: Routes = [
  { path: 'loginAlumno', component: LoginComponent },
  { path: 'loginProfesor', component: LoginPComponent },
  { path: 'home', component: QuienComponent},
  { path: 'notasAlumno', component: NotasComponent },
  { path: 'comentarios', component: CajaComponent},
  { path: 'iprofe', component: IprofeComponent},
  { path: 'ialumno', component: IalumnoComponent},
  { path: 'profesor', component: ProfesorComponent},
  { path: 'notas', component: NotasComponent},
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'login'}
  },
  { path: '',
    redirectTo:'/login',
    pathMatch:'full'
  }
];

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
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {  enableTracing: true }),   
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
