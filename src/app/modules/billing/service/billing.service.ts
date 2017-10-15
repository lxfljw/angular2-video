import { Injectable,Inject} from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import { environment } from '../../../../environments/environment.prod';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

//return this._authHttp.post(environment.baseUrl + '/v1/oauth/client', data);

@Injectable()
export class BillingService 

{
 
    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http,) {}

    startBilling(parking_id): Observable<any> {
        return this.http.post(environment.baseUrl+'/v1/parking/checkin',JSON.stringify(),this.options);
    }
 
 /*
    stopBilling(): Observable<any> {
        return this.http.post(environment.baseUrl+'/v1/parking/checkout',JSON.stringify(),this.options);
   }


    manualPay(): Observable<any> {
        return this.http.post(environment.baseUrl+'/v1/users/self/pay',JSON.stringify(),this.options);
    }
*/
    getCoupons(): Observable<any> {
        return this.http.get(environment.baseUrl+'/v1/users/self/coupons').map(res =>res.json());
    }


//Admin
    getSelfHistory(): Observable<any> {
        return this.http.get(environment.baseUrl+'/v1/users/self/parking/history').map(res =>res.json());
    }    

}


export class HistoryService {
 
    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http,) {}
}