import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { DataScreenRoutingModule } from "./data-screen-routing.module";
import { DataScreenComponent } from "./data-screen.component";

// Material Design imports below
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  declarations: [DataScreenComponent],
  imports: [
    CommonModule,
    DataScreenRoutingModule,
    FontAwesomeModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
  ],
})
export class DataScreenModule {}
