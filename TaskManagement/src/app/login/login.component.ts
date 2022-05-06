import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public submitted=false;
  constructor() { }

  ngOnInit(): void {
  }
logForm=new FormGroup({
email:new FormControl(null,[Validators.required,Validators.email]),
pass:new FormControl(null,[Validators.required]),

})
login(){
  this.submitted=true;
    console.log(this.logForm.value)

}
}
