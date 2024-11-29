import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-component-directives><div ng-app="" ng-init="myText='Hello World!'">

<p ng-bind="myText"></p>

</div></app-component-directives>
  <app-struct-dir></app-struct-dir> 
  <app-for></app-for>
  <app-switch></app-switch>
  <app-class></app-class>
  <app-style></app-style>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = "Hello from parent"
}
