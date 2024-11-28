import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task27nov';
  val: string = 'Sachin sisodiya'; 
  // value for currentItem to the child so that item renders as Television.
  currentItem = 'Television';
}
