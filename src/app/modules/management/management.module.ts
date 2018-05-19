import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementRoutes } from './management.routes';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './management.component';
import { ManagementService } from './service/management.service';
import { ButtonModule }  from 'primeng/primeng';
import { InputTextModule }  from 'primeng/primeng';
import {AutoCompleteModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';

let page = [

 	ManagementComponent
];


@NgModule({
	declarations: [
	    ...page
	],
	imports: [
		InputTextModule,
		DropdownModule,
		ButtonModule,
	    CommonModule,
	    ManagementRoutes,
	    AutoCompleteModule
	],
	providers: [ManagementService]
})
export class ManagementModule { };
  