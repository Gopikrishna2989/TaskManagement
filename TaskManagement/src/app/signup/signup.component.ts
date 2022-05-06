import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
public submitted=false;
  constructor() { }

  ngOnInit(): void {
  }
  loginForm=new FormGroup({
    UserName:new FormControl(null,[Validators.required,Validators.minLength(4)]),
    FirstName:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    
    Email: new FormControl(null,[Validators.required ,Validators.email]),
    PhoneNumber:new FormControl(null,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),Validators.pattern("^[0-9]*$")]),
     Password:new FormControl(null,[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$")]),
  }) 
submit(){
  this.submitted=true;
    console.log(this.loginForm.value)

}
}
