import { Component, OnInit, Inject} from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-parking-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})



export class HistoryComponent implements OnInit {


  constructor(

              private formBuilder: FormBuilder,
              private http: Http
              ) {}

  ngOnInit() {
      
  }






}
