import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthInterceptor } from './auth.interceptor';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductoresComponent } from './productores/productores.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ComerciantesComponent } from './comerciantes/comerciantes.component';
import { ProductorFormComponent } from './productor-form/productor-form.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NuevoUsuarioFormComponent } from './nuevo-usuario-form/nuevo-usuario-form.component';
import { NuevoComercianteFormComponent } from './nuevo-comerciante-form/nuevo-comerciante-form.component';
import { NuevoClienteFormComponent } from './nuevo-cliente-form/nuevo-cliente-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    ProfileComponent,
    HeaderComponent,
    HomeComponent,
    ProductoresComponent,
    ClientesComponent,
    ComerciantesComponent,
    ProductorFormComponent,
    UsuariosComponent,
    NuevoUsuarioFormComponent,
    NuevoComercianteFormComponent,
    NuevoClienteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
