import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurkRoutingModule } from './turk-routing.module';
import { TurkeyNewsComponent } from './turkey-news/turkey-news.component';


@NgModule({
  declarations: [TurkeyNewsComponent],
  imports: [
    CommonModule,
    TurkRoutingModule
  ]
})
export class TurkModule { }
