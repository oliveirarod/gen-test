import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DataScreenComponent } from "./data-screen.component";

const routes: Routes = [
  {
    path: "",
    component: DataScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataScreenRoutingModule {}
