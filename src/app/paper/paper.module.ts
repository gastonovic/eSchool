import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {PaperEditComponent} from "./paper-edit.component";
import {PaperService} from "./paper.service";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  imports :[
    RouterModule.forChild([
      {path : 'demandepapiers', component : PaperEditComponent}
    ]),
    CommonModule,
    ReactiveFormsModule
  ],

  declarations : [
    PaperEditComponent
  ],

  providers : [
    PaperService
  ]

})
export class PaperModule {}
