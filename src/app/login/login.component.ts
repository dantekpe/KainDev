import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'

})
export class LogInComponent{
    pageTitle: string = 'Login';
    imagePath: string = 'assets/images/Dogid.jpg'; 

    loginForm: FormGroup;
    invalidLogin: boolean = false;  
    
    constructor(private formBuilder: FormBuilder, 
        private router: Router) {
    }
    
    ngOnInit(){
        this.loginForm = this.formBuilder.group({
            id: [], 
            email: ['',  Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit(){
        //console.log(this.SignupForm.value);
        console.log(this.loginForm.value);
        if(this.loginForm.invalid){
            return;
        }
    }

}