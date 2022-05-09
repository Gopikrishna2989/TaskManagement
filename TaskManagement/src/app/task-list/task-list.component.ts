import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  rows = [
    { Task_Name: 'ame', Task_Description: 'fun', Task_Status: 'to do', Assign_Task: 'Austin',Task_Start_Date: '10/5/22', Task_End_Date: '10/5/22' },
    { Task_Name: 'Game', Task_Description: 'fun', Task_Status: 'to do', Assign_Task: 'Austin',Task_Start_Date: '10/5/22', Task_End_Date: '10/5/22' },
    { Task_Name: 'Game', Task_Description: 'fun', Task_Status: 'to do', Assign_Task: 'Austin',Task_Start_Date: '10/5/22', Task_End_Date: '10/5/22' },
    { Task_Name: 'Game', Task_Description: 'fun', Task_Status: 'to do', Assign_Task: 'Austin',Task_Start_Date: '10/5/22', Task_End_Date: '10/5/22' },
    { Task_Name: 'Game', Task_Description: 'fun', Task_Status: 'to do', Assign_Task: 'Austin',Task_Start_Date: '10/5/22', Task_End_Date: '10/5/22' },
    { Task_Name: 'Game', Task_Description: 'fun', Task_Status: 'to do', Assign_Task: 'Austin',Task_Start_Date: '10/5/22', Task_End_Date: '10/5/22' },
    { Task_Name: 'ame', Task_Description: 'fun', Task_Status: 'to do', Assign_Task: 'Austin',Task_Start_Date: '10/5/22', Task_End_Date: '10/5/22' },
    { Task_Name: 'ame', Task_Description: 'fun', Task_Status: 'to do', Assign_Task: 'Austin',Task_Start_Date: '10/5/22', Task_End_Date: '10/5/22' },
    { Task_Name: 'ame', Task_Description: 'fun', Task_Status: 'to do', Assign_Task: 'Austin',Task_Start_Date: '10/5/22', Task_End_Date: '10/5/22' },
    { Task_Name: 'ame', Task_Description: 'fun', Task_Status: 'to do', Assign_Task: 'Austin',Task_Start_Date: '10/5/22', Task_End_Date: '10/5/22' },
    { Task_Name: 'ame', Task_Description: 'fun', Task_Status: 'to do', Assign_Task: 'Austin',Task_Start_Date: '10/5/22', Task_End_Date: '10/5/22' },
    { Task_Name: 'ame', Task_Description: 'fun', Task_Status: 'to do', Assign_Task: 'Austin',Task_Start_Date: '10/5/22', Task_End_Date: '10/5/22' },
    { Task_Name: 'ame', Task_Description: 'fun', Task_Status: 'to do', Assign_Task: 'Austin',Task_Start_Date: '10/5/22', Task_End_Date: '10/5/22' },
    { Task_Name: 'ame', Task_Description: 'fun', Task_Status: 'to do', Assign_Task: 'Austin',Task_Start_Date: '10/5/22', Task_End_Date: '10/5/22' },
     { Task_Name: 'ame', Task_Description: 'fun', Task_Status: 'to do', Assign_Task: 'Austin',Task_Start_Date: '10/5/22', Task_End_Date: '10/5/22' },
  ];
  columns = [{ prop: 'Task_Name' }, { prop: 'Task_Description' }, { prop: 'Task_Status' },{ prop: 'Assign_Task' },{ prop: 'Task_Start_Date' },{ prop: 'Task_End_Date' }]
  constructor() { }

  ngOnInit(): void {
  }
}
