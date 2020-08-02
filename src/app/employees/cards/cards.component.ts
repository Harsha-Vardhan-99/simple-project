import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './../../shared/employee.service'
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
Users=[];
  constructor(public service:EmployeeService) {
    this.Users=this.service.getEmployee();
   }
  ngOnInit(): void {
  }

}
