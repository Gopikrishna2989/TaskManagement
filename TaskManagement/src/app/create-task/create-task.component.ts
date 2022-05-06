import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  constructor() { }

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
  }
}
