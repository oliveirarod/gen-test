import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { SocialMediasComponent } from "./social-medias.component";

@NgModule({
  declarations: [SocialMediasComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [SocialMediasComponent],
})
export class SocialMediasModule {}
