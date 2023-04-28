import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThanksPageRoutingModule } from './thanks-page-routing.module';
import { ThanksPageComponent } from './thanks-page.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ThanksPageComponent
  ],
  imports: [
    CommonModule,
    ThanksPageRoutingModule,
    MatIconModule
  ]
})
export class ThanksPageModule { }
