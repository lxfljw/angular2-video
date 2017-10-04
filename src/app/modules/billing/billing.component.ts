import { Component, OnInit, Inject} from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BillingService} from './service/billing.service';
 
@Component({
  selector: 'app-parking-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
})



export class BillingComponent implements OnInit {


  constructor(
              private BillingService: BillingService,
              private formBuilder: FormBuilder,
              private http: Http
              ) {}

  ngOnInit() {

  	this.getCoupons();
  	
  	console.log(this.getCoupons);
  	console.log('this.getCoupons');
  }

getCoupons(){
	this.BillingService.getCoupons();
  }




}
