import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {MarkDetailsComponent} from "./mark-details.component";
import {CommonModule} from "@angular/common";
import {MarkService} from "./mark.service";
import {SharedModule} from "../../shared/subject/shared.module";
/**
 * Created by gaston on 19/07/17.
 */

@NgModule({
  imports :[
    RouterModule.forChild([
      {path : 'notes', component : MarkDetailsComponent}

    ]),
    CommonModule,
    SharedModule
  ],

  declarations : [
    MarkDetailsComponent
  ],

  providers : [
    MarkService
  ]

})
export class MarkModule {}
