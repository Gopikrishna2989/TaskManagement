import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListService } from '../list.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employeeObject:any
employeeDisplay:any
@ViewChild('closeBtn') closeBtn: ElementRef | undefined;
  constructor(private service:ListService) {
   
    this.getInitialCall();
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
  this.employeeObject=this.EmployeeForm.value;
  // post employee data
  this.service.postDataToEmployeeDetails(this.employeeObject).subscribe()
  alert('Employee Added Successfully')
  this.closeModal();
  this.getInitialCall()
 
  
}
getInitialCall(){
this.service.getEmployeeDetails().subscribe(result=>{
  this.employeeDisplay=result;
})
}
private closeModal(): void {
  this.closeBtn?.nativeElement.click();
}
 
}
