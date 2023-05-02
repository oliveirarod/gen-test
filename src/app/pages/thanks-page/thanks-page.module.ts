import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ThanksPageRoutingModule } from "./thanks-page-routing.module";
import { ThanksPageComponent } from "./thanks-page.component";
import { SocialMediasModule } from "src/app/components/social-medias/social-medias.module";

import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [ThanksPageComponent],
  imports: [
    CommonModule,
    ThanksPageRoutingModule,
    SocialMediasModule,
    MatIconModule,
  ],
})
export class ThanksPageModule {}
