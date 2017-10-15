import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingRoutes } from './parking.routes';
import { ParkingComponent } from './parking.component';
import { RouterModule, Routes } from '@angular/router';
import { ParkingService } from './service/parking.service';


let page = [
	ParkingComponent

];


@NgModule({
    declarations: [
    	...page
    ],
    imports: [
 
	    CommonModule,
	    ParkingRoutes
    ],
    providers: [ ParkingService ]
})
export class ParkingModule { };
