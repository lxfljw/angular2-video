import { Component, OnInit, Inject} from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-parking-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.scss'],
})



export class ParkingComponent implements OnInit {


  constructor(

              private formBuilder: FormBuilder,
              private http: Http
              ) {}

  ngOnInit() {
      
  }






}
