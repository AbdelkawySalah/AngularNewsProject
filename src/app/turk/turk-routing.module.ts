import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TurkeyNewsComponent} from './turkey-news/turkey-news.component';

const routes: Routes = [
  {path:'',component:TurkeyNewsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurkRoutingModule { }
