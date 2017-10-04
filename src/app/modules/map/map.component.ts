import { Component, OnInit, Inject} from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-parking-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})



export class MapComponent implements OnInit {


  constructor(

              private formBuilder: FormBuilder,
              private http: Http
              ) {}

  ngOnInit() {
      
  }






}
