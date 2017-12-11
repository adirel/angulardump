import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <h1> {{ title }} </h1>
  <div *ngIf="myArr; then trueTmpl; else otherTmpl">I exist</div>

  <ng-template #otherTmpl>No, I do.</ng-template>
  <ng-template #trueTmpl>Yes Ido!.</ng-template>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'course';
  myObject = {
    gender: 'male',
    age: 33,
    location: 'USA'
  };

  myArr = true;
}

