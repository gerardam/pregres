import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarPasswordComponent } from './components/dashboard/cambiar-password/cambiar-password.component';
import { CuestionariosComponent } from './components/dashboard/cuestionarios/cuestionarios.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BienvenidoComponent } from './components/inicio/bienvenido/bienvenido.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegisterComponent } from './components/inicio/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent, children:[
    { path: '', component: BienvenidoComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
  ]},
  { path: 'dashboard', component:DashboardComponent, children:[
    { path: '', component: CuestionariosComponent },
    { path: 'cambiarPassword', component:CambiarPasswordComponent }
  ]},
  /* cuando no hay macheo con ningun path anterior(
     recomendable redireccionar a una pagina que indique "Pagina no encontrada") */
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
