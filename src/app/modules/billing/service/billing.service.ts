import { Injectable,Inject} from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class BillingService 

{
 
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });


    constructor(private http: Http,) {}

/*
    startBilling(): Observable<any> {
          return this.http.post('/v1/parking/checkin',JSON.stringify(),this.options);
    }

    stopBilling(): Observable<any> {
          return this.http.post('/v1/parking/checkout',JSON.stringify(),this.options);
   }


    manualPay(): Observable<any> {
          return this.http.post('/v1/users/self/pay',JSON.stringify(),this.options);
     }
*/
    getCoupons(): Observable<any> {
         return this.http.get('/v1/users/self/coupons').map(res =>res.json());
    }

}




