import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ListService } from 'src/app/list.service';
@Component({
  selector: 'app-employ',
  templateUrl: './employ.component.html',
  styleUrls: ['./employ.component.css']
})
export class EmployComponent implements OnInit {
//ngx data table
columns=[{ prop: 'name' },{ prop: 'username' },{ prop: 'Dob' },]
rows:any
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
this.service.getEmployeeDetails().subscribe((result: any)=>{
  this.rows=result;
})
}
private closeModal(): void {
  this.closeBtn?.nativeElement.click();
}


}
