import { Component } from '@angular/core';

@Component({
  selector: 'app-event-databinding',
  templateUrl: './event-databinding.component.html',
  styleUrls: ['./event-databinding.component.css']
})
export class EventDatabindingComponent {

  countValue:number = 0

  inputValue:string = ""
  
    increment(){
      this.countValue += 1
    }
  
    decrement(){
      if(this.countValue > 0){
        this.countValue -= 1
      }
    }
  
    onChangeInput(ev:any){
      this.inputValue = ev.target.value
    }
}
