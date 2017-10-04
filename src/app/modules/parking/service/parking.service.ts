import { Injectable,Inject} from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class ParkingService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });


  constructor(
              private http: Http,) {}


 

 // searchParking(): Observable<any> {
   // return this.http.post('/v1/parking/search',JSON.stringify(),this.options);
  //}

  
 



                      }




