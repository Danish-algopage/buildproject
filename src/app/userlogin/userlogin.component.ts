import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userlogin = new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })
  userdtls:any = [];
  userdata(item:any){
    console.warn(this.userlogin.value)
    this.userdtls = item
  }
}
