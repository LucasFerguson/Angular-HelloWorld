import { Component } from '@angular/core';

// <div class="apple"> .apple
// <div id="apple"> #apple
@Component({
  selector: 'courses',
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `,
})
export class CoursesComponent {
  title = 'List of courses';
  courses = ['courses1', 'courses2', 'courses3', 'courses4', 'courses5'];
}
