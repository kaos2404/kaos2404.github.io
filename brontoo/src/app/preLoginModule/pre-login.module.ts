import { HomeGuard } from './../postLoginModule/home-component/home.guard';
import { BrowserModule } from '@angular/platform-browser';
import { CommonImportsModule } from '../common-imports.module';
import { LoginComponent } from './login-component/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginGuard } from './login-component/login.guard';


const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'home', loadChildren: '../postLoginModule/post-login.module#PostLoginModule', canActivate: [HomeGuard]},
  { path: "**", redirectTo: 'login' }
]


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonImportsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[ LoginGuard, HomeGuard ],
  exports: [
    RouterModule
  ]
})

export class PreLoginModule {

}
