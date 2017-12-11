import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'udemmy course';
  titleClass = 'red-title';
  titleClasses = {
    'red-title': true,
    'large-title': true
  };
  titleLabel = 'Some random title!';
  titleLabels = 'Some random title with classes binding!';
  titleStyle = 'red';
  myEvent(event) {
    if (this.titleClass === 'red-title') {
      this.titleClass = 'blue-title';
      this.titleLabel = 'Some random title! blue';
    } else {
      this.titleLabel = 'Some random title! red';
      this.titleClass = 'red-title';
    }

  }


}




