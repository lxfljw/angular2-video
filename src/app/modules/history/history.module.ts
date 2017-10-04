import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryRoutes } from './history.routes';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history.component';
import { HistoryService } from './service/history.service';

 
 

let page = [
 HistoryComponent

];



@NgModule({
  declarations: [
    ...page
  ],
  imports: [
   
    CommonModule,
    HistoryRoutes
  ],
  providers: [HistoryService]
})
export class HistoryModule { };
