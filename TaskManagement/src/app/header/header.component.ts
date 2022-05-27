import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:ListService) { 
 this.get()
   
  }
  

  ngOnInit(): void {
    
  }
  get(){
    return sessionStorage.getItem('username');
  }

}
