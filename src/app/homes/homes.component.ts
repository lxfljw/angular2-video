import { Component, OnInit,  ViewChild,Inject, ViewEncapsulation,ElementRef} from '@angular/core';
//导入ParkingSpot模块
import { ParkingSpot }  from '../models/parkingspot';
import { MapsComponent } from '../maps/maps.component';


@Component({
  selector: 'app-home',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css'],
})


export class HomesComponent implements OnInit {
    thing;
    spot:ParkingSpot;

        ngOnInit() {
        }
    @ViewChild(MapsComponent)  mapsComponent: MapsComponent;

    //定义函数getNotification()
    getNotification(evt) {
        console.log(evt.properties.streetMarker);
        //定义bayId为时间的属性的bayId
        let bayId = evt.properties.bayId;
        let streetMaker = evt.properties.streetMarker;
        let streetName = evt.properties.streetName;
        let events = evt.properties.sensor;
        let signPlate = evt.properties.signPlates;
        //打印事件
        console.log(events);
        console.log(signPlate);
        //定义全局变量spot为新的ParkingSpot(bayId,.....)
        this.spot = new ParkingSpot(bayId,streetMaker,streetName,events,signPlate);
    } 
        
    doSomething(evt){
        this.thing = evt.value;
        console.log(this.thing);
        this.mapsComponent.refresh(this.thing);
    }

          
}
