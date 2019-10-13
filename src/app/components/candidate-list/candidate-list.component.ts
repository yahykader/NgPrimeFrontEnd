import { Component, OnInit } from "@angular/core";
import {Candidate} from "../../models/candidate";
import {CandidateService} from "../../services/candidate.service";

@Component({
  selector: "app-candidate-list",
  templateUrl: "./candidate-list.component.html",
  styleUrls: ["./candidate-list.component.css"],
})
export class CandidateListComponent implements OnInit {
  public listCandidates: Candidate;
  public cols: any[];

  constructor(private candidateService: CandidateService) {
  }

  public ngOnInit() {
    this.cols = [
      { field: "id", header: "Id" },
      { field: "name", header: "Name" },
      { field: "naissance", header: "Naissance" },
      { field: "gender", header: "Gender" },
      { field: "edit", header: "Edit" },
      { field: "sup", header: "Delete" },
    ];
    this.getAllCandidates(); }

  public getAllCandidates() {
    const url = this.candidateService.host + "getAllCandidates";
    this.candidateService.getAllCandidates(url).subscribe((data) => {
      this.listCandidates = data;
    }, (error1) => {
      console.log("error");
    });

  }

  public addNewCandidate() {

  }

  public selectCandidate(candidate1) {

  }

  public deleteCandidate(candidate) {

  }
}
