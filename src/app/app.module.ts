import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { WikiComponent } from './wiki/wiki.component';
import { WikiService } from './shared/wiki.service';


@NgModule({
  declarations: [
    AppComponent,
    WikiComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [WikiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
