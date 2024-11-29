import { Component } from '@angular/core';

@Component({
  selector: 'app-component-directives',// Yeh selector ko HTML mein use karenge
  templateUrl: './component-directives.component.html',
  styleUrls: ['./component-directives.component.css']
})
export class ComponentDirectivesComponent {
  title = 'Hello, Angular!';

  changeTitle() {
    this.title = 'Component directives';
}
}