import { Component } from '@angular/core';

@Component({
  selector: 'app2',
  template: `<h4 class="text-primary">{{message}}</h4>`,
})
export class App2Component { message: string = 'You are most welcome here ...'; }
