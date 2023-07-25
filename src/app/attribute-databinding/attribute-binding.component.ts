import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.css']
})
export class AttributeBindingComponent {
  isDisabled:boolean = false
  isHidden:boolean = false 
  path:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSq5MSnV09nxUMbit5aAXabVZoeb__VSVMMzHUuhz&s"

}
