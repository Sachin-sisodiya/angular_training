import { Component } from '@angular/core';

@Component({
  selector: 'app-struct-dir',
  templateUrl: './struct-dir.component.html',
  styleUrls: ['./struct-dir.component.css']
})
export class StructDirComponent {
  isVisible = true; // Initially content is visible
  
  toggleVisibility() {
    this.isVisible = !this.isVisible; }
 
 
}