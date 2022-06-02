import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildModule } from './child.module';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule],
})
export class ChildRoutingModule { }
