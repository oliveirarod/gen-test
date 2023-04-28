import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DataScreenRoutingModule } from "./data-screen-routing.module";
import { DataScreenComponent } from "./data-screen.component";

// Material Design imports below
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [DataScreenComponent],
  imports: [
    CommonModule,
    DataScreenRoutingModule,
    MatFormFieldModule,
    MatDividerModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class DataScreenModule {}
