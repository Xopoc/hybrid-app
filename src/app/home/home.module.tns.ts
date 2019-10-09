import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { HomeRoutingModule } from '@src/app/home/home-routing.module';
import { HomeComponent } from '@src/app/home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    NativeScriptCommonModule,
    HomeRoutingModule,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
