import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapRoutes } from './map.routes';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map.component';
import { MapService } from './service/map.service';



let page = [
  MapComponent

];



@NgModule({
  declarations: [
    ...page
  ],
  imports: [

    CommonModule,
    MapRoutes
  ],
  providers: [   MapService ]
})
export class MapModule { };
