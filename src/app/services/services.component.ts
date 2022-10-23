import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data=10;
  updateData(){
    this.data= Math.floor((Math.random() * 100))
  }
  userDetails=[
    {name: "Danish", email: "danish@gmail.com"},
    {name: "Zishan", email: "zishan@gmail.com"},
    {name: "Wahid", email: "wahid@gmail.com"}
  ]
}
