import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {Candidate} from "../models/candidate";

@Injectable({
  providedIn: "root",
})
export class CandidateService {
 public host: string = "http://localhost:8080/api/candidates/";
  constructor( private http: HttpClient) { }

  public getAllCandidates(url): Observable<Candidate> {
    return this.http.get<Candidate>(url);
  }
}
