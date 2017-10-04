import { Injectable,Inject} from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class InfoService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });


  constructor(
              private http: Http,) {}


 

  getSelfInfo(): Observable<any> {
    return this.http.get('/v1/users/self/info').map(res =>res.json());
  }
//Admin
    getUserInfo(): Observable<any> {
    return this.http.get(' /v1/users/:user/info').map(res =>res.json());
  }

    getParkingEvents(): Observable<any> {
    return this.http.get('/v1/parking/events').map(res =>res.json());
  }

//Owner
    getParkingId(): Observable<any> {
    return this.http.get('  /v1/parking/:parking_id').map(res =>res.json());
  }
//Owner
    GetParkingIdLog(): Observable<any> {
    return this.http.get(' /v1/parking/:parking_id/log').map(res =>res.json());
  }

 getParkingInfo(): Observable<any> {
    return this.http.get(' /v1/parking/:parking_id/:space_id/any').map(res =>res.json());
  }

  //updateParkingInfo(): Observable<any> {
   // return this.http.put(`/v1/parking/:parking_id/:space_id/any`,JSON.stringify(), this.options);
 // }

 




 


}




