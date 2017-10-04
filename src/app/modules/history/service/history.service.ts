import { Injectable,Inject} from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class HistoryService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });


  constructor(
              private http: Http,) {}


 
//Admin
  getSelfHistory(): Observable<any> {
    return this.http.get('/v1/users/self/parking/history').map(res =>res.json());
  }


//Admin
 getUserHistory(): Observable<any> {
    return this.http.get(' /v1/users/:user/parking/history').map(res =>res.json());
  }

//Admin
   getGetSpaceId(): Observable<any> {
    return this.http.get('/v1/parking/:parking_id/:space_id').map(res =>res.json());
  }


//Owner
  getParkingIdHistory(): Observable<any> {
    return this.http.get('/v1/parking/:parking_id /history').map(res =>res.json());
  }   



}




