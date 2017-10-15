import { Component, OnInit, Inject} from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HistoryService} from '../service/parking.service';


@Component({
    selector: 'app-parking-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss'],
})
 


export class HistoryComponent implements OnInit {

 	  user=1;
    parking_id=2;
	  space_id=3;
    constructor( 
        private HistoryService: HistoryService,
        private formBuilder: FormBuilder,
        private http: Http
    ){}

    ngOnInit() {

    	  this.getParkingHistory();
    	  console.log('test message');
      
    }
 
    getParkingHistory(){
      	this.HistoryService.getParkingHistory().subscribe(
            res=>{console.log(res)},
            error => { console.log(error)}
        );
    }


}
