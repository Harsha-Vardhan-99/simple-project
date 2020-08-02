import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { FormGroup,FormControl, Validators, NG_VALIDATORS} from "@angular/forms";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  form: FormGroup=new FormGroup({
    $key:new FormControl(null),
    fullName:new FormControl('',Validators.required),
    email: new FormControl('',Validators.email),
    mobile:new FormControl('',Validators.required),
    gender:new FormControl('1'),
    city:new FormControl('')
  });

  constructor(
    private dialogRef: MatDialogRef<EmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) data)
    { }

  ngOnInit(): void {
  }

 onSave(): void{
    this.dialogRef.close(this.form.value);
  }

  onCancel(){
    this.dialogRef.close();
  }

}
