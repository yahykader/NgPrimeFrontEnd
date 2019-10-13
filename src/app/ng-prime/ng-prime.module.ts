import { NgModule } from "@angular/core";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
const  NgPrimeComponents = [TableModule, ButtonModule];

@NgModule({
  declarations: [],
  imports: [NgPrimeComponents],
  exports: [NgPrimeComponents],
})
export class NgPrimeModule { }
