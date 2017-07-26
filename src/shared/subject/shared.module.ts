import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {SubjectService} from "./subject.service";
import {CommonModule} from "@angular/common";


@NgModule({
  imports :[
    CommonModule
  ],
exports :[
  CommonModule,

],
declarations : [

],

providers : [
  SubjectService
]

})
export class SharedModule {}
