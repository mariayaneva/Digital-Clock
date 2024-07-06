import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClockCommonComponent } from "./digital-clock-common/digital-clock-common/digital-clock-common.component";

const routes: Routes = [
  {
    path: '',
    component: ClockCommonComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClockRoutingModule { }
