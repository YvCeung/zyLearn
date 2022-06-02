import { Component } from '@angular/core';

@Component({
  selector: 'child-compl',
  template: `<div>
<h3>{{title}}</h3>

  </div>`
})
export class ChildComponent {

  title = 'child   a 1';
}
/*

<a [routerLink]="['child1']">
  child1asdfasdfasdfasdfasdfasdfasdf
</a>

<a [routerLink]="['child1']">
Child 1 Component
</a>


<router-outlet></router-outlet> */