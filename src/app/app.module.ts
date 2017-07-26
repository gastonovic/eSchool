import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {StudentModule} from "./student/student.module";
import {RouterModule} from "@angular/router";
import {PaperModule} from "./paper/paper.module";
import {MarkModule} from "./mark/mark.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'welcome',redirectTo :''}
    ]),
    HttpModule,
    StudentModule,
    PaperModule,
    MarkModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "fr-FR" },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
