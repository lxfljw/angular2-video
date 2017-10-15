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
    parking_id=2;
    space_id=3;
    price=1;

    constructor(
        private ParkingService: ParkingService,
        private formBuilder: FormBuilder,
        private http: Http
    ){}

    ngOnInit() {
        this.test(this.parking_id);
        this.getParkingInfo(this.parking_id,this.space_id);
        this.getEvents(this.parking_id);
        this.searchParking1(this.price);
        this.cancleReservation1(this.parking_id);
        console.log('test message');   
    }

    getParkingInfo(parking_id,space_id){
    	  this.ParkingService.getParkingInfo(parking_id,space_id).subscribe(
            res=>{console.log(res)},
            error => { console.log(error)}
        );
    }

    getEvents(parking_id){
    	  this.ParkingService.getEvents(parking_id).subscribe(
            res=>{console.log(res)},
            error => { console.log(error)}
        );
    }

    test(parking_id){
        this.ParkingService.test(parking_id).subscribe(
            res=>{console.log(res)},
            error => { console.log(error)}
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

}