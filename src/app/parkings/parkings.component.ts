import { Component, OnInit, Inject} from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

//import { ParkingService } from '../services/parking.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.scss'],
})



export class ParkingsComponent implements OnInit {
  dataFileName = '20140101.json';
  _collection;

  parkings = [];
  
  isLoading = true;
  isEditing = false;
  constructor(
              private mapService:  MapService,
              //private parkingService:  ParkingService,
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent) {}

  ngOnInit() {
      this.getMaps(this.dataFileName); 
  }



  getMaps(dataFileName) {
      var self = this;
      this.mapService.getMaps3(dataFileName).subscribe(
            collection => {
              console.log('ddff');
              console.log(collection);
              console.log( collection.parkingEvents);
              self._collection = collection;
            }    
      )
  }


}
