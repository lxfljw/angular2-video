import { Component, OnInit, Inject} from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ParkingService} from './service/parking.service';

@Component({
    selector: 'app-parking-parking',
    templateUrl: './parking.component.html',
    styleUrls: ['./parking.component.scss'],
})

   
export class ParkingComponent implements OnInit {

    user=1;
    parking_id=3388;
    space_id="A2";
    prices=1015;
    booking_id="A123";
    a=1;
    b=2;
    c=3;
    constructor(
        private ParkingService: ParkingService,
        private formBuilder: FormBuilder,
        private http: Http
    ){}

    ngOnInit() {
/*      this.test(this.parking_id);
        this.cancleReservation1(this.booking_id);
        
        this.reserveParking1(this.parking_id);
        this.searchParking1(this.price);
        this.searchParking2(this.a,this.b,this.c);
        this.getSpaceStatus(this.parking_id,this.space_id);
        this.modifyThePrices(this.parking_id,this.prices);
        this.updateSpaceIdStatus(this.parking_id,this.space_id);
*/
       
        this.getEvents(this.parking_id);
        console.log('test message');   
    }

    getSpaceStatus(parking_id,space_id){
    	  this.ParkingService.getSpaceStatus(parking_id,space_id).subscribe(
            res=>{console.log(res)},
            error => { 
                console.log(error)
            }
        );
    }

    getEvents(parking_id){
    	  this.ParkingService.getEvents(parking_id).subscribe(
            res=>{console.log(res)},
            error => {
                 console.log(error)
            }
        );
    }


    searchParking1(price){
        this.ParkingService.searchParkingByPrice(price).subscribe(
            res=>{
                console.log('2222')
                console.log(res)
            },
            error => { 
                console.log(error)
            }
        );
    }


    searchParking2(lat,lng,radius){
        this.ParkingService.searchParkingByLocation(lat,lng,radius).subscribe(
            res=>{
                console.log('search2')
                console.log(res)
            },
            error => { 
                console.log(error)
            }
        );
    }


    cancleReservation1(booking_id){
        this.ParkingService.cancleReservation(booking_id).subscribe(
            res=>{
                console.log('3333')
                console.log(res)
            },
            error => { 
                console.log(error)
            }
        );
    }

    reserveParking1(parking_id){
        this.ParkingService.reserveParking(parking_id).subscribe(
            res=>{
                console.log('4444')
                console.log(res)
            },
            error => { 
                console.log(error)
            }
        );
    }

    modifyThePrices(parking_id,prices){
        this.ParkingService.modifyThePrices(parking_id,prices).subscribe(
            res=>{
                console.log('modify prices');
                console.log(res);
            },
            error => { 
                console.log(error)
            }
        );
    }

     updateSpaceIdStatus(parking_id,space_id){
        this.ParkingService.updateSpaceIdStatus(parking_id,space_id).subscribe(
            res=>{
                console.log('updateSpaceIdStatus')
                console.log(res)
            },
            error => { 
                console.log(error)
            }
        );
    }


}