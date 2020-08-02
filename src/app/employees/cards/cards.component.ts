import { EmployeeService } from './../../shared/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers:[EmployeeService]
})
export class CardsComponent implements OnInit {
Users=[];
  constructor(service) {
    this.Users=service.getUsers();
   }

  ngOnInit(): void {
  }

}
