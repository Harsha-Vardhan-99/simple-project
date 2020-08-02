
//import { localstorageDB } from '../../../node_modules/localstoragedb';

import { Injectable } from '@angular/core';

import localStorageDB from "localStorageDB";
import {Employee} from '../employees/schema/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  database = new localStorageDB("Employee","localStorage")

  constructor() {
    if(!this.database.tableExists("Users")){
     this.database.createTable("Users",["fullName","email","mobile","gender","city"]);
    };
  }

  saveEmployee(employee: Employee){
    this.database.insert("Users",employee);
    this.database.commit();
  }

  getEmployee(){
    return this.database.queryAll("Users",{});
  }
}
