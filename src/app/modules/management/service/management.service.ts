import { Injectable,Inject} from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment.prod';


@Injectable()
export class ManagementService {

    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

    constructor( private http: Http,) {}

    //Admin
    getUserHistory(user): Observable<any> {
        return this.http.get(environment.baseUrl+'/v1/users/'+user+'/parking/history').map(res =>res.json());
    }
//--------------------------------------------------------------------------------------------
    //========================================================================================
    getUserInfo1(): Observable<any> {
        let fileName = 'camera_13214_19.h264';
        var query = '?fileName='+fileName;
        console.log(fileName);
        return this.http.get(environment.baseUrl+'/v1/getvideo'+query);

    }

    getVideoInfo(day):Observable<any>{
        var query = '?timestamp='+day;
        return this.http.get(environment.baseUrl+'/v1/getvideoinfo'+query);
    }
//============================================================================================
//--------------------------------------------------------------------------------------------

    //Owner
    getParkingId(parking_id): Observable<any> { 
        return this.http.get(environment.baseUrl+'/v1/parking/'+parking_id).map(res =>res.json());
    }


    getParkingIdLog(parking_id): Observable<any> {
        return this.http.get(environment.baseUrl+'/v1/parking/'+parking_id+'/log').map(res =>res.json());
    }

/////////////////////////////////////////////////////////////////////////////


    getParkingInfo(parking_id,space_id): Observable<any> {
        return this.http.get(environment.baseUrl+'/v1/parking/'+parking_id+'/'+space_id+'/any').map(res =>res.json());
    }

    //updateParkingInfo(parking_id,space_id): Observable<any> {
    // return this.http.put(environment.baseUrl+`/v1/parking/'+parking_id+'/'+space_id+'/any`,JSON.stringify(), this.options);
    // }





 


}




