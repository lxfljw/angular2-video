import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementRoutes } from './management.routes';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './management.component';
import { ManagementService } from './service/management.service';


let page = [

 	ManagementComponent
];


@NgModule({
	declarations: [
	    ...page
	],
	imports: [
	
	    CommonModule,
	    ManagementRoutes
	],
	providers: [ManagementService]
})
export class ManagementModule { };
 