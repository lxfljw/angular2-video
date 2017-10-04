import { Component, OnInit, Input} from '@angular/core';
import { ParkingSpot }      from '../models/parkingspot';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})


export class InfosComponent implements OnInit {
	
	@Input() private data:ParkingSpot;

    constructor(){}

    ngOnInit() {



    }
          
}
