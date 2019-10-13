import {HttpClientModule} from "@angular/common/http";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TableModule} from "primeng/table";
import { AppComponent } from "./app.component";
import { CandidateDetailComponent } from "./components/candidate-detail/candidate-detail.component";
import { CandidateListComponent } from "./components/candidate-list/candidate-list.component";
import { FavoriteInfoComponent } from "./components/favorite-info/favorite-info.component";
import {NgPrimeModule} from "./ng-prime/ng-prime.module";
@NgModule({
  declarations: [
    AppComponent,
    CandidateListComponent,
    FavoriteInfoComponent,
    CandidateDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgPrimeModule, TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
