import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListService } from 'src/app/list.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
employees:any
  constructor(private service:ListService) {
    this.getEmployees()
   }

  ngOnInit(): void {
  }
  taskForm=new FormGroup({
    TaskName:new FormControl(null,[Validators.required]),
    TaskStatus:new FormControl(null,[Validators.required]),
    TaskDescription:new FormControl(null,[Validators.required]),
    TaskStartDate:new FormControl(null,[Validators.required]),
    TaskEndDate:new FormControl(null,[Validators.required]),
    AssignStatus:new FormControl(null,[Validators.required]),
  })
  createTask(){
    console.log(this.taskForm.value);
    this.newItemEvent.emit(this.taskForm.value);
    
    
  }
  @Output() newItemEvent = new EventEmitter<string>();
  //get employees from employee component
  getEmployees(){
    this.service.getEmployeeDetails().subscribe((result)=>{
      this.employees=result;
    })
  }
}
