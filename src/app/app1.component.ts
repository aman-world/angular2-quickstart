import { Component } from '@angular/core';

@Component({
  selector: 'app1',
  template: `<h1 class="text-success">Hello {{name}}</h1> <app2></app2> <app3></app3>`,
})
export class App1Component { name = 'Aman'; }
