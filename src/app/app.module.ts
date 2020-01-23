import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component'; 
import { LogInComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule ,
    RouterModule.forRoot([
      {path: 'Signup', component: SignUpComponent },
      {path: 'Login', component: LogInComponent },
      {path: '', redirectTo: 'Login', pathMatch: 'full'},
      {path: '**', redirectTo: 'Login', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
