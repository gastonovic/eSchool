/**
 * Created by gaston on 19/07/17.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http,Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {IMark} from "./mark";
import {environment} from "../../environments/environment";
import {ISubject} from "../../shared/subject/subject";
import {SubjectService} from "../../shared/subject/subject.service";
@Injectable()

export class MarkService{

  private apiUrl = environment.apiUrl+'MatieresEvaluations';
  private headers: Headers;
  constructor (private http : Http ,private subjectService : SubjectService) {
    this.headers = new Headers();
    this.headers.append('Content-Type','application/json');
    this.headers.append('Accept', 'application/json');
  }
  getMarks (studentId : number) : Observable<IMark[]>
  {
    const url = this.apiUrl+'?filter={"include":["matieres","evaluations"],"where":{"inscriptionsEtudiantIdetudiant":'+studentId+'}}';

    return this.http.get(url)
    //.map(this.extractData)
      .map((res : Response) => this.extractData(res) )
      .do(data => console.log('marks :' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  private handleError(error: Response): Observable<any> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
  private extractData(response: Response) {
    let body = response.json();

    return body || {};
  }
}
