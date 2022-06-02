import { Component } from '@angular/core';

@Component({
  selector: 'child-compl',
  template:`<div>123<span>{{title}}</span>
  Child1
  </div>`
})
export class Child1Component {
  // <router-outlet></router-outlet>
  title = 'child1';
}
