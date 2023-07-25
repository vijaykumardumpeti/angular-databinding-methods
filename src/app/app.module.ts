import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { AttributeBindingComponent } from './attribute-databinding/attribute-binding.component';
import { ClassBindingComponent } from './class-databinding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';

import { TwowayDatabindingComponent } from './twoway-databinding/twoway-databinding.component';
import { FormsModule } from '@angular/forms';
import { EventDatabindingComponent } from './event-databinding/event-databinding.component';



@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    AttributeBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
  
    TwowayDatabindingComponent,
       EventDatabindingComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
