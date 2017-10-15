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
  

    getParkingInfo(parking_id,space_id): Observable<any> {
        return this.http.get(environment.baseUrl+'/v1/parking/'+parking_id+'/'+space_id+'/any').map(res =>res.json());
    }



    test(parking_id): Observable<any> {
        return this.http.get(environment.baseUrl+'/v1/parking/'+parking_id+'/events/test').map(res =>res.json());
    }



    searchParkingByLocation(lat,lng,radius): Observable<any> {
        var query = "?lat="+lat+"&lng="+lng+"&radius="+radius;
        return this.http.post(environment.baseUrl+'/v1/parking/search'+query,this.options);
    }

    searchParkingByPrice(price): Observable<any> {
        var query = "?price="+price;
        return this.http.post(environment.baseUrl+'/v1/parking/search'+query,this.options);
    }



    // booking service

    reserveParking(parking_id): Observable<any> {
        return this.http.post(environment.baseUrl+' /v1/parking/reserve',{parking_id:parking_id},this.options);
    }

    cancleReservation(booking_id): Observable<any> {
        return this.http.put(environment.baseUrl+'/v1/parking/reservation/'+booking_id+'/cancel',this.options);
    }



/*
    /// parking manager  ???
    modifyThePrice(parking_id): Observable {
        return this.http.put(environment.baseUrl+'/v1/parking/'+parking_id+'/prices', this.options);
    }

  
/
    // update_data == json format     ???
    updateParkingInfo(parking_id, update_data): Observable {
        return this.http.put(environment.baseUrl+'/v1/parking/'+parking_id,  this.options);
    }
*/
    getEvents(parking_id): Observable<any> {
        return this.http.get(environment.baseUrl+'/v1/parking/'+parking_id+'/events').map(res =>res.json());
    }

}


export class HistoryService {
    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

    constructor( private http: Http,) {}
    
    getParkingHistory(): Observable<any> {
        return this.http.get(environment.baseUrl+'/v1/users/self/parking/history1').map(res => res.json());
    }
}


