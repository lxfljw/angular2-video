import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info.component';
 
 const routes:Routes= [
{
	path: '',component: InfoComponent,
},
                      ];
 

export const InfoRoutes: ModuleWithProviders = RouterModule.forChild(routes);
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}