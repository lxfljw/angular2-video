import { Component, OnInit, Inject} from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ManagementService} from './service/management.service';

@Component({
    selector: 'app-parking-management',
    templateUrl: './management.component.html',
    styleUrls: ['./management.component.scss'],
})

export class ManagementComponent implements OnInit {
  
    user = 1;
    parking_id = 2;
    space_id  = 3;
                       
    constructor(
   		private managementService: ManagementService,
        private formBuilder: FormBuilder,
        private http: Http
    ){}

    ngOnInit(){
        this.getUserInfo(this.user);
        this.getParkingId(this.parking_id);
        this.getParkingIdLog(this.parking_id);
        this.getParkingInfo(this.parking_id,this.space_id);
        console.log('test message');
    }

    getUserInfo(user){
    	this.managementService.getUserInfo(user).subscribe(
            res=>{console.log(res)},
            error => { console.log(error)}
        );
    }

    getParkingId(parking_id){
    	this.managementService.getParkingId(parking_id).subscribe(
            res=>{console.log(res)},
            error => { console.log(error)}
        );
    }

    getParkingIdLog(parking_id){
        this.managementService.getParkingIdLog(parking_id).subscribe(
            res=>{console.log(res)},
            error => { console.log(error)}
        );
    }

    getParkingInfo(parking_id,space_id){
    	this.managementService.getParkingInfo(parking_id,space_id).subscribe(
            res=>{console.log(res)},
            error => { console.log(error)}
        );
    }

}
