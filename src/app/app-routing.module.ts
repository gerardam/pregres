import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './components/inicio/bienvenido/bienvenido.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegisterComponent } from './components/inicio/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/bienvenido', pathMatch: 'full' },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  /* cuando no hay macheo con ningun path anterior(
     recomendable redireccionar a una pagina que indique "Pagina no encontrada") */
  { path: '**', redirectTo: '/bienvenido', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
