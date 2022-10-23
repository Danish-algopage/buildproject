import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buildproject';
  data="X";
  updateData(item:string){
    console.log(item);
    this.data= item;
  }
  asdf:any;
  today= Date();
}
