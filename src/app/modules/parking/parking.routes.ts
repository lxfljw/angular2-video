import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkingComponent } from './parking.component';
 
 const routes:Routes= [
	{
		path: '',component: ParkingComponent,
	},
];
  

export const ParkingRoutes: ModuleWithProviders = RouterModule.forChild(routes);
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class RoutingModule {}