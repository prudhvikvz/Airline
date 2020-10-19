import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';



import {LoginComponent} from '../../login/login.component';
import { Employees } from 'src/app/Employees';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['index', 'id', 'first_name', 'last_name', 'email','edit'];
  dummy: Employees = new Employees();
  users: Employees[] = [{
    "id": 1,
    "first_name": "Sebastian",
    "last_name": "Eschweiler",
    "email": "sebastian@codingthesmartway.com"
  },
  {
    "id": 2,
    "first_name": "Steve",
    "last_name": "Palmer",
    "email": "steve@codingthesmartway.com"
  },
  {
    "id": 3,
    "first_name": "Ann",
    "last_name": "Smith",
    "email": "ann@codingthesmartway.com"
  },{
    "id": 1,
    "first_name": "Sebastian",
    "last_name": "Eschweiler",
    "email": "sebastian@codingthesmartway.com"
  },
  {
    "id": 2,
    "first_name": "Steve",
    "last_name": "Palmer",
    "email": "steve@codingthesmartway.com"
  },
  {
    "id": 3,
    "first_name": "Ann",
    "last_name": "Smith",
    "email": "ann@codingthesmartway.com"
  },{
    "id": 1,
    "first_name": "Sebastian",
    "last_name": "Eschweiler",
    "email": "sebastian@codingthesmartway.com"
  },
  {
    "id": 2,
    "first_name": "Steve",
    "last_name": "Palmer",
    "email": "steve@codingthesmartway.com"
  },
  {
    "id": 3,
    "first_name": "Ann",
    "last_name": "Smith",
    "email": "ann@codingthesmartway.com"
  },{
    "id": 1,
    "first_name": "Sebastian",
    "last_name": "Eschweiler",
    "email": "sebastian@codingthesmartway.com"
  },
  {
    "id": 2,
    "first_name": "Steve",
    "last_name": "Palmer",
    "email": "steve@codingthesmartway.com"
  },
  {
    "id": 3,
    "first_name": "Ann",
    "last_name": "Smith",
    "email": "ann@codingthesmartway.com"
  },{
    "id": 1,
    "first_name": "Sebastian",
    "last_name": "Eschweiler",
    "email": "sebastian@codingthesmartway.com"
  },
  {
    "id": 2,
    "first_name": "Steve",
    "last_name": "Palmer",
    "email": "steve@codingthesmartway.com"
  },
  {
    "id": 3,
    "first_name": "Ann",
    "last_name": "Smith",
    "email": "ann@codingthesmartway.com"
  },{
    "id": 1,
    "first_name": "Sebastian",
    "last_name": "Eschweiler",
    "email": "sebastian@codingthesmartway.com"
  },
  {
    "id": 2,
    "first_name": "Steve",
    "last_name": "Palmer",
    "email": "steve@codingthesmartway.com"
  },
  {
    "id": 3,
    "first_name": "Ann",
    "last_name": "Smith",
    "email": "ann@codingthesmartway.com"
  },{
    "id": 1,
    "first_name": "Sebastian",
    "last_name": "Eschweiler",
    "email": "sebastian@codingthesmartway.com"
  },
  {
    "id": 2,
    "first_name": "Steve",
    "last_name": "Palmer",
    "email": "steve@codingthesmartway.com"
  },
  {
    "id": 3,
    "first_name": "Ann",
    "last_name": "Smith",
    "email": "ann@codingthesmartway.com"
  }];

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  edit(row){
    console.log(row);
    this.dummy=row;
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = false;
    dialogConfig.width = "40%";
    dialogConfig.height = "60%";
    dialogConfig.data = this.dummy;
    const dialogRef = this.dialog.open(LoginComponent,dialogConfig);  

    

    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );   
}
}