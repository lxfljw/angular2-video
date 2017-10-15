import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing.component';
 
 const routes:Routes= [
	{
		path: '',component: BillingComponent,
	},
];
 

export const BillingRoutes: ModuleWithProviders = RouterModule.forChild(routes);
@NgModule({

	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
	
})

export class RoutingModule {}