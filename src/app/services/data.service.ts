import { Injectable,Inject} from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class DataService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });


  constructor(
              private http: Http,) {}


//网页更新
  getData(data): Observable<any> {
    return this.http.get(`http://localhost:3000/api/data/${data._id}`).map(res => res.json());
  }


//网页更新
   getDatas(): Observable<any> {
    return this.http.get('http://localhost:3000/api/datas').map(res => res.json());
  }

//网页更新

  comeData(): Observable<any> {
    return this.http.get('http://localhost:3000/api/data/${data._id}', this.options).map(res => res.json());
  }

//在表格单元格中插入内容，字符串化,起触发作用的是this.options
  sendData(data): Observable<any> {
    console.log(data);
    return this.http.post('http://localhost:3000/api/data', JSON.stringify(data),this.options);
  }

  countDatas(): Observable<any> {
    return this.http.get('http://localhost:3000/api/datas/count').map(res => res.json());
  }

  editData(data): Observable<any> {
    return this.http.put(`http://localhost:3000/api/data/${data._id}`, JSON.stringify(data), this.options);
  }

  deleteData(data): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/data/${data._id}`, this.options);
  }

}
