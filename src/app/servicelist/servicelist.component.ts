import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserdataService } from '../userservice/userdata.service'

@Component({
  selector: 'app-servicelist',
  templateUrl: './servicelist.component.html',
  styleUrls: ['./servicelist.component.css']
})
export class ServicelistComponent implements OnInit {
  userinfo:any;
  constructor(private route: ActivatedRoute, private users: UserdataService) { 
    this.userinfo = users.userInfo();
  }
  userId:any;
  ngOnInit(): void {
    console.log("user id is", this.route.snapshot.paramMap.get("id"));
    this.userId = this.route.snapshot.paramMap.get("id");
  }

}
