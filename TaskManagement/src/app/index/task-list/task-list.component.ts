import { Component, OnInit } from '@angular/core';
import { sample } from 'rxjs';
import { ListService } from 'src/app/list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
 task:any
  
  rows :any
  columns = [{ prop: 'TaskName' },{ prop: 'TaskStatus' },{ prop: 'AssignStatus' },{ prop: 'TaskDescription' },{ prop: 'TaskStartDate' },{ prop: 'TaskEndDate' },];
  constructor(private service:ListService) { 
    
  }

  ngOnInit(): void {
    this.getData()
  } 
  sampleMethod(taskDetails:any) {
    console.log(taskDetails);
    const task=taskDetails;
   
    this.service.PostTaskData(task).subscribe((result)=>{
      console.log(result);
    })
  }
  getData(){
this.service.GetTaskData().subscribe((result1)=>{
  this.rows=result1;
  console.log(this.rows)
})
  }

}
