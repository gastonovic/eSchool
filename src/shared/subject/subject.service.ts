/**
 * Created by gaston on 14/07/17.
 */
import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {ISubject} from "./subject";


@Injectable()
export class SubjectService {
  private apiUrl = 'http://0.0.0.0:3000/api/Etudiants';
  private headers: Headers;
  constructor (private http : Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type','application/json');
    this.headers.append('Accept', 'application/json');
  }
  getSubject (id : number) : Observable<ISubject>
  {
const url = `${this.apiUrl}/${id}`;
  //let subject : IISubject;

return this.http.get(url)
  //.map(this.extractData)
  .map((res : Response) => res.json() )
  //.map(data => subject = new IISubject(data) )n
  .do(data => console.log('subject :' + JSON.stringify(data)))
  .catch(this.handleError);
    }
    private extractData(response: Response) {
    let body = response.json();
    return body.data || {};
    }
private createSubject(subject: ISubject){}
  private handleError(error: Response): Observable<any> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
