import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CreateTaskComponent } from '../index/create-task/create-task.component';
import { ListService } from '../list.service';
import { find } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public submitted = false;
  public msg: any;
  public isCheck=false;
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
                  //withou service
    // this.http.get<any>('http://localhost:3000/SignUpDetails')
    //   .subscribe(res => {
    //     const user = res.find((a: any) => {
    //       return a.Email === this.logForm.value.email && a.Password === this.logForm.value.pass
    //     });
    //     if(user){
    //       alert('login success');
    //       this.logForm.reset();
    //       this.router.navigate(['create-task'])
    //     }
    //     else{
    //       alert('user not found');
    //     }
    //   },err=>{
    //     alert('something went wrong');
    //   })

    this.service.matchUser().subscribe(res => {
      console.log("res", res);
      this.msg = res;
      for (let i = 0; i < this.msg.length; i++) {
        if (this.msg[i]?.Email === this.logForm.value.email && this.msg[i]?.Password === this.logForm.value.pass) {
          
          
          this.isCheck=true;
          
          this.router.navigate(['index/task-list']);

        }
       
      }
      
      if(this.isCheck==false){
        alert('user not found')
      }

    });




  }
}

