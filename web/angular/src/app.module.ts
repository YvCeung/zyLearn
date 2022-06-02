import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { DevUIModule } from 'ng-devui';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './app/first/first.component';
import { SecondComponent } from './app/second/second.component';
import { ChildComponent } from './app/child/child.component';

// import { ChildModule } from "./app/child/child.module";
import { Child1Component } from './app/child/chid1';

// const routes: Routes = [
//   {
//     path: "child", component: ChildModule, children: [
//       { path: "child1", component: Child1Component }
//     ]
//   }

// ];





@NgModule({
  declarations: [
    AppComponent,
  ],
  exports: [RouterModule],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'first-component', component: FirstComponent, children: [
          {
            path: 'child-a', // child route path
            component: ChildComponent, // child route component that the router renders
          },
          {
            path: 'child-b',
            component: Child1Component, // another child route component that the router renders
          },
        ],
      },
      { path: 'second-component', component: SecondComponent },
    ]),
    DevUIModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
