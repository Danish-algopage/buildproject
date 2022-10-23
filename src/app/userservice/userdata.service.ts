import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  constructor(private http:HttpClient) { }
  url = 'https://jsonplaceholder.typicode.com/comments?postId=1';
  httpinfo(){
    return this.http.get(this.url)
  }
  uploadData(data:any){
    return this.http.post(this.url,data);
  }
  userInfo(){
    return [
      {name: "MD Abudanish", age: 23, email: "abudanishmd@gmail.com" },
      {name: "Zishan Afjal", age: 22, email: "zishanafjal@gmail.com" },
      {name: "Wahid Alli", age: 21, email: "wahidalli@gmail.com" },
      {name: "Azad Hussain", age: 23, email: "azadhussain@gmail.com" }
    ]
  }
  laptopData(){
    return [
      {laptop_name:"Dell", laptop_size:"14 Inch"},
      {laptop_name:"HP", laptop_size:"16 Inch"},
      {laptop_name:"Asus", laptop_size:"16 Inch"}
    ]
  }
}
