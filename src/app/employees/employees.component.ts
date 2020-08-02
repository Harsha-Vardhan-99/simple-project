import { EmployeeService } from './../shared/employee.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog"
import { EmployeeComponent } from './employee/employee.component';
import { Employee } from './schema/Employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  private service: EmployeeService;
  private dialog: MatDialog;
  employees = [];

  constructor(employeeService: EmployeeService, matDialog: MatDialog) {
    this.service = employeeService;
    this.dialog = matDialog;
    this.employees = employeeService.getEmployee();
  }

  onSaveEmployee(employee: Employee) {
    this.employees.push(employee);
    this.service.saveEmployee(employee);
  }

  onCreateEmployee(){
    const dialogconfig = new MatDialogConfig();
    dialogconfig.autoFocus=true;
    dialogconfig.width="60%";
    const dialogref = this.dialog.open(EmployeeComponent,dialogconfig);

    dialogref.afterClosed().subscribe(
      data => this.onSaveEmployee(data)
    );
  }

  ngOnInit(): void {
  }
}
