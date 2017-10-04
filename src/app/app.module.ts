import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Component , CUSTOM_ELEMENTS_SCHEMA ,ApplicationRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentModule } from 'ng-dynamic';
import { FormsModule } from '@angular/forms';
import { D3Service } from 'd3-ng2-service'; // <-- import statement
import { MomentModule } from 'angular2-moment/moment.module';

import { CalendarModule } from 'primeng/primeng';
import { SliderModule } from 'primeng/primeng';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { DataService } from './services/data.service';
//import { ParkingService } from './services/parking.service';
//import { MapService } from './services/map.service';
//import { Map1Service } from './services/map1.service';
import { AuthService } from './services/auth.service';
import { DatasComponent } from './datas/datas.component';
import { ParkingsComponent } from './parkings/parkings.component';
import { MapsComponent } from './maps/maps.component';
import { InfosComponent } from './infos/infos.component';
import { Map1sComponent } from './map1s/map1s.component';
import { SlidersComponent } from './sliders/sliders.component';
import { HomesComponent } from './homes/homes.component';
import { StatsComponent } from './stats/stats.component';
import { HttpModule} from '@angular/http';
//import { LeafletModule } from '@asymmetrik/angular2-leaflet';
import { BillingComponent } from './modules/billing/billing.component';
import { BillingService  } from './modules/billing/service/billing.service';
import { HistoryComponent } from './modules/history/history.component';
import { HistoryService  } from './modules/history/service/history.service';
import { InfoComponent } from './modules/info/info.component';
import { InfoService  } from './modules/info/service/info.service';
import { MapComponent } from './modules/map/map.component';
import { MapService  } from './modules/map/service/map.service';
import { ParkingComponent } from './modules/parking/parking.component';
import { ParkingService  } from './modules/parking/service/parking.service';
@NgModule({
  declarations: [
    DatasComponent,
    AppComponent,
    ParkingsComponent,
    MapsComponent,
    Map1sComponent,
    InfosComponent,
    HomesComponent,
    StatsComponent,
    SlidersComponent,
    BillingComponent,
    HistoryComponent,
    InfoComponent,
    MapComponent,
    ParkingComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MomentModule,
    SliderModule,
    CalendarModule,
    HttpModule,
    RoutingModule,
    BrowserAnimationsModule,
    SharedModule,

    DynamicComponentModule.forRoot({}),
    //LeafletModule.forRoot()
  ],
  providers: [
    D3Service,

    AuthService,
    DataService,
    UserService,
   // ParkingService,
    MapService,
    //Map1Service
    BillingService,
    HistoryService,
    InfoService,
    MapService,
    ParkingService,

    ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
