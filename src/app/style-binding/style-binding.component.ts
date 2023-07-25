import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent {
  cvalue:string = "pink"
  objectOfStyles:object={
    color:"white", background: "black", border:"5px solid green"
  }
  hasError:boolean = false
}
