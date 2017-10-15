import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './management.component';
 
const routes:Routes= [
	{
		path: '',component: ManagementComponent,
	},
];
 

export const ManagementRoutes: ModuleWithProviders = RouterModule.forChild(routes);
@NgModule({

    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]

})

export class RoutingModule {}