import { Component } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent {

    bgColor = 'lightblue'; // Initial background color
    fontSize = '20px'; // Initial font size
    changeStyle() {
      this.bgColor = this.bgColor === 'lightblue' ? 'lightgreen' : 'lightblue'; // Toggle background color
      this.fontSize = this.fontSize === '20px' ? '30px' : '20px'; // Toggle font size
}
}