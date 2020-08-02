import { EmployeeService } from './../../shared/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service:EmployeeService) { }

  ngOnInit(): void {
  }
 onSave(): void{
    this.service.saveEmployee();
    this.service.form.reset();
  }
  onCancel(){
    this.service.getEmployee();
    this.service.form.reset();
  }
  
}
