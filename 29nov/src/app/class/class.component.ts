import { Component } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent {
  isHighlighted = false; // Initially, no highlight

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted; // Toggle highlight
  }
}
