
//import { localstorageDB } from '../../../node_modules/localstoragedb';

import { Injectable } from '@angular/core';
import { FormGroup,FormControl, Validators, NG_VALIDATORS} from "@angular/forms";

var localstorageDB=require ("localstorageDB");

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  database=new localstorageDB("Employee",localStorage);
  form: FormGroup=new FormGroup({
    $key:new FormControl(null),
    fullName:new FormControl('',Validators.required),
    email: new FormControl('',Validators.email),
    mobile:new FormControl('',Validators.required),
    gender:new FormControl('1'),
    department:new FormControl(0),
    hireDate:new FormControl(''),
    isPermanent:new FormControl(false),
    city:new FormControl('')
  });
  constructor() { 
  if(!this.database.tableExists("Users")){
    this.database.createTable("Users",["fullName","email","mobile","gender","city"]);
  };
}
  saveEmployee(){
    const {fullName,email,mobile,gender,city} = this.form.value;
    this.database.insert("Users",{fullName,email,mobile,gender,city});
    this.database.commit();
  }
  getEmployee(){
    console.log(this.database.queryAll("Users"));
  }
}
