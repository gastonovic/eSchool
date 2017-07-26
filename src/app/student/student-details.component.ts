import {Component, OnInit} from "@angular/core";
import {Student} from "./student";
import {StudentService} from "./student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
@Component({
  moduleId : module.id,
  templateUrl : './student-details.component.html'
})

export class StudentDetailsComponent implements OnInit {
pageTitle : string = 'Informations personelles';
student : Student;
private sub : Subscription;
private errorMessage : string;


constructor (private studentService : StudentService,private router : Router,private route: ActivatedRoute)
{}
ngOnInit(): void {
  this.sub = this.route.params.subscribe(
    params => {
      let id = +params['id'];
      this.getStudent(id);

    }
  )
}

getStudent(id : number) {
  this.studentService.getStudent(id).subscribe(
    student => this.student = student ,
    error => this.errorMessage =<any> error
  );
}

}
