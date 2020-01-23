import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign',
    templateUrl: './signup.component.html'

})
export class SignUpComponent{
    pageTitle: string = 'Signup';
    
    imagePath: string = 'assets/images/Dogid.jpg'; 
    
    SignupForm: FormGroup;
    invalidLogin: boolean = false;  
    
    constructor(private formBuilder: FormBuilder, 
        private router: Router) {
    }
    
    ngOnInit(){
        this.SignupForm = this.formBuilder.group({
            id: [],
            fname: ['', Validators.required],
            lname: ['', Validators.required],
            email: ['',  Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit(){
        //console.log(this.SignupForm.value);
        console.log(this.SignupForm.value);
        if(this.SignupForm.invalid){
            return;
        }
    }
        

}