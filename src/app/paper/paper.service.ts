/**
 * Created by gaston on 18/07/17.
 */
import {Injectable} from "@angular/core";
import {Http, RequestOptions, Response, Headers} from "@angular/http";
import {IPaper} from "./paper";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {environment} from "../../environments/environment";

@Injectable()
export class PaperService{
  private baseUrl = environment.apiUrl + 'Demandepapiers';
  private headers: Headers;
  constructor(private http:Http)
  {
    this.headers = new Headers();
    this.headers.append('Content-Type','application/json');
    this.headers.append('Accept', 'application/json');
  }
  savePaper(paper: IPaper): Observable<IPaper> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers, method:"post" });


      return this.createPaper(paper, options);
    }

  private createPaper(paper: IPaper, options: RequestOptions): Observable<IPaper> {
    paper.idDemandepapiers = undefined;
    paper.dateDepot = undefined;
    paper.etat = 0;
    paper.dateCloture = undefined;
    paper.etudiantIdetudiant = 0;
    paper.professeurIdprofesseur = undefined;
    return this.http.post(this.baseUrl, paper, options)
      .map((res : Response) => res.json())
      .do(data => console.log('createPaper: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  private extractData(response: Response) {
    let body = response.json();
    return body.data || {};
  }

  private handleError(error: Response): Observable<any> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
