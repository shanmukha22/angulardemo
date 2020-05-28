import { Component } from "@angular/core";

@Component({
    selector: 'app-child',
    templateUrl:'./child.component.html',
    styleUrls: ['./child.component.css']

})
export class ChildComponent{
 /*String Interpolation */   
title="String interpolation";
 num1 = 10;    
num2 = 20;  
showButton=false; 
textvalue=""; 
  addNumbers() {    
    return this.num1 + this.num2;    
  } 
  
  constructor(){
  setTimeout(() => {
      this.showButton=true;
  }, 3000);
}
  eventbutton() {
    console.log('Hello World');
  }
  onTextInput(event)
  {
      this.textvalue=event.target.value;
      //console.log(event);
  }


}