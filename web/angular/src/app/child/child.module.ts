import { NgModule } from '@angular/core';
// import { ChildRoutingModule } from "./child-routing.module";
import { RouterModule } from '@angular/router';
import { Child1Component } from "./chid1";
import { ChildComponent } from './child.component';


@NgModule({
  declarations: [ChildComponent],
  imports: [RouterModule],
  // exports: [Child1Component]
})
export class ChildModule { }

