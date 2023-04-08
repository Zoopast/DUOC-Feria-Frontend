import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { UserResolver } from './user.resolver';

const routes: Routes = [
  { path: 'iniciar_sesion', component: LoginFormComponent, canActivate: [AuthGuard] },
  { path: 'registrate'  , component: SignupFormComponent, canActivate: [AuthGuard] },
  { path: 'perfil', component: ProfileComponent, resolve: {user: UserResolver} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
