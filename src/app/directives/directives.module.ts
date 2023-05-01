import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EllipsisDirective } from "./ellipsis.directive";

@NgModule({
  declarations: [EllipsisDirective],
  imports: [CommonModule],
  exports: [EllipsisDirective],
})
export class DirectivesModule {}
