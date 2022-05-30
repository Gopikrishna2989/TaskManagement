import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { findIndex } from 'rxjs';
import { ListService } from 'src/app/list.service';
@Component({
  selector: 'app-employ',
  templateUrl: './employ.component.html',
  styleUrls: ['./employ.component.css']
})
export class EmployComponent implements OnInit {
  rowData:any
  isCheck=true;
//ngx data table
columns=[{ prop: 'name' },{ prop: 'username' },{ prop: 'Dob' },{ prop: 'email' },{ prop: 'role' },]
rows:any
  employeeObject:any
employeeDisplay:any
@ViewChild('closeBtn') closeBtn: ElementRef | undefined;
  constructor(private service:ListService,private route:ActivatedRoute) {
   
    this.getInitialCall();
    this.edit()
   }

  ngOnInit(): void {
    
  }
EmployeeForm=new FormGroup({
  name:new FormControl(null,Validators.required),
  username:new FormControl(null,Validators.required),
  password:new FormControl(null,Validators.required),
  Dob:new FormControl(null,Validators.required),
  email:new FormControl(null,[Validators.required,Validators.email]),
  role:new FormControl(null,Validators.required),
  
});

  submit(){
    if(this.isCheck==true){
      this.employeeObject=this.EmployeeForm.value;
      // post employee data
      this.service.postDataToEmployeeDetails(this.employeeObject).subscribe()
      alert('Employee Added Successfully')
      this.closeModal();
      this.getInitialCall()
    }
    else{
      this.employeeObject=this.EmployeeForm.value;
      console.log(this.employeeObject)
     
      // put employee data
      this.service.putDataToEmployeeDetails(this.employeeObject,this.rowData.id).subscribe()
      alert('Employee Updated Successfully')
      this.closeModal();
      this.getInitialCall()
    }
    
   
    
  }


getInitialCall(){
this.service.getEmployeeDetails().subscribe((result: any)=>{
  this.rows=result;

})
}
private closeModal(): void {
  this.closeBtn?.nativeElement.click();
}
//edit the post

onActivate(event: { type: string; row: any; }) {
  if(event.type == 'click') {
      this.rowData=event.row;
      console.log(this.rowData)
      this.EmployeeForm.patchValue(this.rowData)
      
  }
}
edit(){
 this.isCheck=false;
     
  }
  add(){
    this.EmployeeForm.reset()
  }
}
