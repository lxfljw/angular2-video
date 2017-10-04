import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoRoutes } from './info.routes';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info.component';
import { InfoService } from './service/info.service';



let page = [
 InfoComponent

];



@NgModule({
  declarations: [
    ...page
  ],
  imports: [
  
    CommonModule,
    InfoRoutes
  ],
  providers: [InfoService]
})
export class InfoModule { };
