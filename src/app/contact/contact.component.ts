import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  data: any = [];
  getData(item: any) {
    console.warn(item);
    this.data = item;
  }
  userdata = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
    message: new FormControl('', [Validators.required, Validators.minLength(30)])
  })
  userdtlsdata: any = [];
  userdatadtl(item: any) {
    console.log(this.userdata.value)
    this.userdtlsdata = item
  }
  get name() {
    return this.userdata.get('name')
  }
  get email() {
    return this.userdata.get('email')
  }
  get password() {
    return this.userdata.get('password')
  }
  get message() {
    return this.userdata.get('message')
  }
}
