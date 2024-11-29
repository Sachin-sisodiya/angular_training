import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {
  selectedColor: string = ''; // Initially, no color is selected

  selectColor(color: string) {
    this.selectedColor = color; // Set the selected color
  }
}
