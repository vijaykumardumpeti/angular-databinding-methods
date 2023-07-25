import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway-databinding',
  templateUrl: './twoway-databinding.component.html',
  styleUrls: ['./twoway-databinding.component.css']
})
export class TwowayDatabindingComponent {
  city = ""

  updateCity(){
    this.city = "Hyderabd" 
  }
}
