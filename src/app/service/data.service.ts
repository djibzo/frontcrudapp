import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Employee } from '../employee';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient:HttpClient,private router: Router) { }
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'},),
  };
  getData(){
    return this.httpclient.get('http://127.0.0.1:8000/api/users/');
  }
  insertData(data: Employee){
    return this.httpclient.post('http://127.0.0.1:8000/api/users/',data);
  }
  getEmployeeByID(id:any){
    return this.httpclient.get('http://127.0.0.1:8000/api/users/'+id);
  }
  updateData(id:any,data:any){
    return this.httpclient.put('http://127.0.0.1:8000/api/users/'+id,JSON.stringify(data),this.httpOptions);
  }
  deleteData(id:any) {
    return this.httpclient.delete('http://localhost:8000/api/users/'+id);
  }
}
