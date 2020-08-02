import { Component, OnInit, Input } from '@angular/core';
import {EmployeeService} from './../../shared/employee.service'
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() employees = [];
  
  constructor(public service:EmployeeService) {
    //this.employees=this.service.getEmployee();
   }

  ngOnInit(): void {
  }

}
