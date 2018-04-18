import { Component } from '@angular/core';

@Component({
  selector: 'app3',
  templateUrl: './app3.template.html',
})
export class App3Component {
  imageUrl: string = 'lady2.png';
  buttonText: string = 'Please get your laptop here';
  changeImage(): void {
    if (this.imageUrl === 'lady2.png') {
      this.imageUrl = 'lady1.png';
      this.buttonText = 'Go Back';
    } else {
      this.imageUrl = 'lady2.png';
      this.buttonText = 'Please get your laptop here';
    }
  }
}
