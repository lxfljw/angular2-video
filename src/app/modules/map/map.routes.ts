import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map.component';
 
 const routes:Routes= [
{
	path: '',component: MapComponent,
},
                      ];
 

export const MapRoutes: ModuleWithProviders = RouterModule.forChild(routes);
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}