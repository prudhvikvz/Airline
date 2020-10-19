import { Component, OnInit ,Inject} from '@angular/core';
import { FormGroup,FormControl, FormArray,ReactiveFormsModule} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Employees} from "../Employees"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  row: Employees = new Employees();
  editForm :FormGroup
  constructor( private dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
        this.row = data;
     }

  ngOnInit(): void {
   this.editForm = new FormGroup({
      id: new FormControl(this.row.id),
      firstname: new FormControl(this.row.first_name),
      lastname: new FormControl(this.row.last_name),
      email: new FormControl(this.row.email)
    });
  }

  loginUser(event){
    event.preventDefault();
    const target = event.target
    const username = target.querySelector('#un').value()
    console.log(username);
  }
  save() {
    this.dialogRef.close(this.editForm.value);
}

close() {
    this.dialogRef.close();
}

}
