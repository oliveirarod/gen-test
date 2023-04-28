import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EditDialogRoutingModule } from "./edit-dialog-routing.module";
import { EditDialogComponent } from "./edit-dialog.component";

import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [EditDialogComponent],
  imports: [
    CommonModule,
    EditDialogRoutingModule,
    MatDialogModule,
    MatButtonModule,
  ],
})
export class EditDialogModule {}
