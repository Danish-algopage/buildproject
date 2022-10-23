import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userservice/userdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userinfo:any;
  httpData:any;
  constructor(private users:UserdataService, private userData:UserdataService) {
    this.userinfo = users.userInfo();
    userData.httpinfo().subscribe((data)=>{
      console.log(data);
      this.httpData=data;
    });

   }
   adduser(data:any){
    this.userData.uploadData(data).subscribe((result)=>{
      console.warn(result);
    });
   }
  ngOnInit(): void {
  }
  
}
