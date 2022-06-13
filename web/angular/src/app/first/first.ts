import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Child1Component } from "../child/chid1";
import { ChildComponent } from "../child/child.component";
import { FirstComponent } from "./first.component";


@NgModule({
  declarations: [FirstComponent],
  exports: [FirstComponent],
  imports: [
    // RouterModule,

    RouterModule.forChild([
      {
        path: 'child-a', // child route path
        component: ChildComponent, // child route component that the router renders
      },
      {
        path: 'child-b',
        component: Child1Component, // another child route component that the router renders
      },
    ])
  ]
})
export class FirstModule { }