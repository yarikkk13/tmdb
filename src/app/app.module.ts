import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app/app.component';
import {HeaderComponent} from './components/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { DemoComponent } from './components/demo/demo.component';

let routes: Routes = [
  {path:'demo',component:DemoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
