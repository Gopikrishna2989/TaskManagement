import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CreateTaskComponent } from '../index/create-task/create-task.component';
import { ListService } from '../list.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public submitted = false;
  public msg: any;
  public isCheck = false;
 

  constructor(private http: HttpClient, private router: Router, private service: ListService) { }

  ngOnInit(): void {
  }
  logForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    pass: new FormControl(null, [Validators.required]),

  })
  login() {
    this.submitted = true;
    console.log(this.logForm.value)


    this.service.matchUser().subscribe(res => {
      console.log("res", res);
      this.msg = res;

      for (let i = 0; i < this.msg.length; i++) {
        if (this.msg[i]?.Email === this.logForm.value.email && this.msg[i]?.Password === this.logForm.value.pass) {

          Swal.fire('Login Succesfully Completed');
          this.isCheck = true;
          //send user name to index
          console.log("user",this.msg?.[i].UserName)
          
         
        sessionStorage.setItem('username',this.msg?.[i].UserName)
          //send user name to index
          break;

        }

      }
      if (this.isCheck == true) {
        this.router.navigate(['index'])
      }

      if (this.isCheck == false) {
        alert('user not found')
      }

    });





  }


}




