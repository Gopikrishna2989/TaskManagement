import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule} from'@angular/common/http';
import { find, Observable, Subject } from 'rxjs';
import { id } from '@swimlane/ngx-datatable';
@Injectable({
  providedIn: 'root'
})
export class ListService {
private _url:any='http://localhost:3000/SignUpDetails'
private _taskUrl='http://localhost:3000/taskDetails'
private _employeeUrl='http://localhost:3000/Employees'
private _sendUserToIndexUrl='http://localhost:3000/General'
  constructor(private http:HttpClient) { }
 
  postUsers(body: any):Observable<object>{
   return this.http.post(this._url,body)
  }
  matchUser():Observable<object>{
 return this.http.get(this._url)
  }
  PostTaskData(task:any):Observable<object>{
   return this.http.post(this._taskUrl,task)
  }
  GetTaskData():Observable<object>{
    return this.http.get(this._taskUrl)
  }
  postDataToEmployeeDetails(employeeObject: any):Observable<object>{
  return  this.http.post(this._employeeUrl,employeeObject)
  }
  getEmployeeDetails():Observable<object>{
   return this.http.get(this._employeeUrl)

  }
  putDataToEmployeeDetails(employeeObject: any,id:number):Observable<object>{
    return this.http.put(this._employeeUrl+'/'+id,employeeObject)
  }
}
