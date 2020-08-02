import { EmployeeService } from './../shared/employee.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog"
import { EmployeeComponent } from './employee/employee.component';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(public dialog:MatDialog) { }
  onCreate(){
    const dialogconfig=new MatDialogConfig;
    //dialogconfig.disableClose=true;
    dialogconfig.autoFocus=true;
    dialogconfig.width="60%";
    this.dialog.open(EmployeeComponent,dialogconfig);
  }
  ngOnInit(): void {
  }
}
