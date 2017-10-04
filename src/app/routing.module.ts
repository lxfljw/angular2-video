import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatasComponent } from './datas/datas.component';
import { ParkingsComponent } from './parkings/parkings.component';
import { MapsComponent } from './maps/maps.component';
import { InfosComponent } from './infos/infos.component';
import { Map1sComponent } from './map1s/map1s.component';
import { HomesComponent } from './homes/homes.component';
import { StatsComponent } from './stats/stats.component';
import { SlidersComponent } from './sliders/sliders.component';
import { AppComponent } from './app.component';
import { BillingComponent } from './modules/billing/billing.component';
import { HistoryComponent } from './modules/history/history.component';
import { InfoComponent } from './modules/info/info.component';
import { MapComponent } from './modules/map/map.component';
import { ParkingComponent } from './modules/parking/parking.component';


const routes: Routes = [
  	{ path: 'map1', component: MapsComponent ,},
	{ path: 'homes', component: HomesComponent ,},
	{ path: 'datas', component: DatasComponent  ,},
	{ path: 'billing', component: BillingComponent,},
    { path: 'history', component: HistoryComponent,},
    { path: 'info', component: InfoComponent,},
    { path: 'map', component: MapComponent,},
    { path: 'parking', component: ParkingComponent,},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
