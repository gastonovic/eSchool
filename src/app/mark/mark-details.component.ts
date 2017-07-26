import {Component, OnInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {MarkService} from "./mark.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IMark} from "./mark";
/**
 * Created by gaston on 19/07/17.
 */
@Component({
  moduleId : module.id,
  templateUrl : 'mark-details.component.html'
})

export class MarkDetailsComponent implements OnInit {
  pageTitle : string = 'Relevé de notes';

  private sub : Subscription;
  private errorMessage : string;
  marks : IMark[];


  constructor (private markService : MarkService,private router : Router,private route: ActivatedRoute)
  {}
  ngOnInit(): void {
    //get the student id from session
    this.markService.getMarks(1).subscribe(marks => this.marks = marks)
  }



}
