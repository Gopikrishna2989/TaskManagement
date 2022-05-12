import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  msg:any=[];
  
  rows =[]
  columns = []
  constructor() { }

  ngOnInit(): void {
  } 
  sampleMethod(taskDetails:any) {
    console.log(taskDetails);
    this.msg.push(taskDetails);
  }
}
