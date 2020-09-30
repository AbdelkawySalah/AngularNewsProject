import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsegyptComponent } from './newsegypt/newsegypt.component';
import { NewsusaComponent } from './newsusa/newsusa.component';
import { DetailComponent } from './detail/detail.component';
import {HttpClientModule} from '@angular/common/http';
import { CutPipe } from './cut.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsegyptComponent,
    NewsusaComponent,
    DetailComponent,
    CutPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
