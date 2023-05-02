import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DisplayDataRoutingModule } from "./display-data-routing.module";
import { DisplayDataComponent } from "./display-data.component";
import { EditDialogComponent } from "src/app/components/edit-dialog/edit-dialog.component";
import { DirectivesModule } from "src/app/directives/directives.module";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

// Material Design imports below
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [DisplayDataComponent, EditDialogComponent],
  imports: [
    CommonModule,
    DisplayDataRoutingModule,
    DirectivesModule,
    FontAwesomeModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
  ],
})
export class DisplayDataModule {}
