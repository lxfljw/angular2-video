import { Injectable,Inject} from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment.prod';


@Injectable()
export class ParkingService {

    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });


    constructor( private http: Http,) {}
  
//============200=====================================================
    getSpaceStatus(parking_id,space_id): Observable<any> {
        return this.http.get(environment.baseUrl+'/v1/parking/'+parking_id+'/'+space_id+'/any').map(res =>res.json());
    }
//====================================================================

//============200=====================================================
    searchParkingByLocation(lat,lng,radius): Observable<any> {
        var query = "?lat="+lat+"&lng="+lng+"&radius="+radius;
        return this.http.post(environment.baseUrl+'/v1/parking/search'+query,this.options);
    }

    searchParkingByPrice(price): Observable<any> {
        var query = "?price="+price;
        return this.http.post(environment.baseUrl+'/v1/parking/search'+query,this.options);
    }
//====================================================================




// booking service
//===============200=================================================
    reserveParking(parking_id): Observable<any> {
        var query = "?parking_id="+parking_id;
        return this.http.post(environment.baseUrl+'/v1/parking/reserve'+query,this.options);
    }
//====================================================================    

//===============200=================================================
    cancleReservation(booking_id): Observable<any> {
        return this.http.put(environment.baseUrl+'/v1/parking/reservation/'+booking_id+'/cancel',this.options);
    }
//====================================================================



//===============200=================================================
    modifyThePrices(parking_id,prices): Observable<any> {
        return this.http.put(environment.baseUrl+'/v1/parking/'+parking_id+'/prices', this.options);
    }
//====================================================================

  
//===============200=================================================
    updateSpaceIdStatus(parking_id,space_id): Observable<any> {
        return this.http.put(environment.baseUrl+'/v1/parking/'+parking_id+space_id, this.options);
    }
//====================================================================
//===============200=================================================
    getEvents(parking_id): Observable<any> {
        return this.http.get(environment.baseUrl+'/v1/parking/'+parking_id+'/events').map(res =>res.json());
    }
//====================================================================


//unsolve?????
getParkingHistory(): Observable<any> {
        return this.http.get(environment.baseUrl+'/v1/users/self/parking/history1').map(res => res.json());
    }






}




