import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { EditDialogComponent } from "./edit-dialog.component";

const routes: Routes = [
  {
    path: "",
    component: EditDialogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDialogRoutingModule {}
