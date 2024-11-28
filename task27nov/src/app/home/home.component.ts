import { Component,Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  val: string = 'Sachin sisodiya'; 
  image = 
  "../../assets/images/screen.jpg";
//part of parent child method 
  @Input() item = '';
 
}
