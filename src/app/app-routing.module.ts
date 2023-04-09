import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AuthGuard } from './auth.guard';
import { LoggedGuard } from './logged.guard';
import { ProfileComponent } from './profile/profile.component';

import { UserResolver } from './user.resolver';
import { ProductoresResolver } from './productores.resolver';

import { HomeComponent } from './home/home.component';

import { ProductoresComponent } from './productores/productores.component';
import { ProductorFormComponent } from './productor-form/productor-form.component';

import { UsuariosComponent } from './usuarios/usuarios.component';

import { ClientesComponent } from './clientes/clientes.component';
import { ComerciantesComponent } from './comerciantes/comerciantes.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'iniciar_sesion', component: LoginFormComponent, canActivate: [LoggedGuard] },
  { path: 'registrate'  , component: SignupFormComponent, canActivate: [LoggedGuard] },
  { path: 'perfil', component: ProfileComponent, resolve: {user: UserResolver} },
  { path: 'productores', component: ProductoresComponent, resolve: { productores: ProductoresResolver }},
  { path: 'productores/nuevo', component: ProductorFormComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'comerciantes', component: ComerciantesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
