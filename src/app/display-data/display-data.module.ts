import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DisplayDataRoutingModule } from "./display-data-routing.module";
import { DisplayDataComponent } from "./display-data.component";

// Material Design imports below
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [DisplayDataComponent],
  imports: [
    CommonModule,
    DisplayDataRoutingModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
  ],
})
export class DisplayDataModule {}
