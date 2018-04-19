import { Component } from '@angular/core';

@Component({
  selector: 'app1',
  template: `<h2 class="text-success">Hello {{name}}</h2> <app2></app2> <app3></app3>`,
})
export class App1Component { name = 'Aman'; }
