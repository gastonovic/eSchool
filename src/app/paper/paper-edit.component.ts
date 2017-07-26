import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PaperService} from "./paper.service";
import {IPaper} from "./paper";
@Component({
templateUrl :'paper-edit.component.html'
})
export class PaperEditComponent implements OnInit{
  paperForm : FormGroup;
  paper : IPaper;
  errorMessage : string;
  constructor(private fb : FormBuilder,
  private paperService : PaperService){}
  ngOnInit(): void {
    this.paperForm = this.fb.group({
      type: ['', Validators.required],
      date: ['', Validators.required],

    });
  }
savePaper(): void {
      if (this.paperForm.dirty)
    {
      // Copy the form values over the paper object values
      let p = Object.assign({}, this.paper, this.paperForm.value);
      this.paperService.savePaper(p)
        .subscribe(
          (error: any) => this.errorMessage = <any>error
      );

    }
  }
}
