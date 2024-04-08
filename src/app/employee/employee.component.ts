import { Component, OnInit  } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  employees:any;
  employee=new Employee();
  constructor(private dataService:DataService) { }

  ngOnInit(){
    this.getEmployeesdata();
  }

  getEmployeesdata() {
    this.dataService.getData().subscribe(res =>{
      this.employees = res;
    });
  }
  insertData(){
    this.dataService.insertData(this.employee).subscribe(res=>{
      this.getEmployeesdata();
    })
  }
  deleteData(id:any){
    this.dataService.deleteData(id).subscribe(res => {
      this.getEmployeesdata();
    })
  }
}