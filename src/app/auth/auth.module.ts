import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignupComponent } from '../auth/signup/signup.component';
import { SigninComponent } from '../auth/signin/signin.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module'


@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
