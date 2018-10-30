import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  btnText = 'Click button below!';

  onButtonClick() {
    this.btnText = 'Congrats. You clicked.';
  }
}
