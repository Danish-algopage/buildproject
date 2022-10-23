import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserdataService } from '../userservice/userdata.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  laptopdata:any;
  constructor(private user:UserdataService) { 
    this.laptopdata = user.laptopData();
  }
@Output() updateDataValue = new EventEmitter<string>();
  ngOnInit(): void {
  }
}
