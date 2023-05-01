import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  myScriptElement: HTMLScriptElement;

  constructor(){
     
     this.myScriptElement = document.createElement("script");
    
     document.body.appendChild(this.myScriptElement);}
ngOnInit(): void {
  console.log('SS')
}
}
