import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsegyptComponent } from './newsegypt/newsegypt.component';
import { NewsusaComponent } from './newsusa/newsusa.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path:'egypt',component:NewsegyptComponent},
  {path:'usa',component:NewsusaComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'turkey',loadChildren: ()=> import('./turk/turk.module').then(m=>m.TurkModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
