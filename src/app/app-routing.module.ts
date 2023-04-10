import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AuthGuard } from './auth.guard';
import { LoggedGuard } from './logged.guard';
import { ProfileComponent } from './profile/profile.component';

import { UserResolver } from './user.resolver';

import { HomeComponent } from './home/home.component';

import { ProductoresResolver } from './productores.resolver';
import { ProductoresComponent } from './productores/productores.component';
import { ProductorFormComponent } from './productor-form/productor-form.component';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { NuevoUsuarioFormComponent } from './nuevo-usuario-form/nuevo-usuario-form.component';

import { ClientesComponent } from './clientes/clientes.component';
import { NuevoClienteFormComponent } from './nuevo-cliente-form/nuevo-cliente-form.component';

import { ComerciantesComponent } from './comerciantes/comerciantes.component';
import { NuevoComercianteFormComponent } from './nuevo-comerciante-form/nuevo-comerciante-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'iniciar_sesion', component: LoginFormComponent, canActivate: [LoggedGuard] },
  { path: 'registrate'  , component: SignupFormComponent, canActivate: [LoggedGuard] },
  { path: 'perfil', component: ProfileComponent, resolve: {user: UserResolver} },
  { path: 'productores', component: ProductoresComponent, resolve: { productores: ProductoresResolver }},
  { path: 'productores/nuevo', component: ProductorFormComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios/nuevo', component: NuevoUsuarioFormComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/nuevo', component: NuevoClienteFormComponent },
  { path: 'comerciantes', component: ComerciantesComponent },
  { path: 'comerciantes/nuevo', component: NuevoComercianteFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
