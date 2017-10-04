import { Component, OnInit, Inject} from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-parking-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})



export class InfoComponent implements OnInit {


  constructor(

              private formBuilder: FormBuilder,
              private http: Http
              ) {}

  ngOnInit() {
      
  }






}
