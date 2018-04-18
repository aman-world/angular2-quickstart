import { Component } from '@angular/core';

@Component({
  selector: 'app2',
  template: `<h2 class="text-primary">{{message}}</h2>`,
})
export class App2Component { message: string = 'You are most welcome here ...'; }
