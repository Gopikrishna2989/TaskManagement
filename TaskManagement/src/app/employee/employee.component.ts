import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
emp:any
  constructor() {
    this.emp=[];
   }

  ngOnInit(): void {
  }
EmployeeForm=new FormGroup({
  name:new FormControl(null,Validators.required),
  username:new FormControl(null,Validators.required),
  password:new FormControl(null,Validators.required),
  Dob:new FormControl(null,Validators.required),
});
submit(){
  this.emp.push(this.EmployeeForm.value)
  alert('Employee Added Successfully')
  
  
  
}

}
