import {NgModule} from "@angular/core";
import {StudentDetailsComponent} from "./student-details.component";
import {RouterModule} from "@angular/router";
import {StudentService} from "./student.service";


@NgModule({
  imports :[
    RouterModule.forChild([
      {path : 'profile/:id', component : StudentDetailsComponent}
    ])
  ],

declarations : [
  StudentDetailsComponent
],

providers : [
  StudentService
]

})
export class StudentModule {}
