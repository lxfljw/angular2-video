import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history.component';
 
 const routes:Routes= [
{
path: '',
component: HistoryComponent
 },
                      ];


export const HistoryRoutes: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}