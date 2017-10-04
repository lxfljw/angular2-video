import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import * as d3 from 'd3';
import {geoTransform,geoProjection,geoPath} from "d3-geo";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from "rxjs/BehaviorSubject"

//导入DataParse模块
import { DataParser } from '../dataParser';


@Injectable()
export class MapService {
    //定义变量
    _collection;
    parser;

    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });



    constructor(private http: Http) {
        //定义全局变量parser为新的函数DaraParser()的返回值
        this.parser= new DataParser();

    }

    getMaps(): Observable<any> {
      	console.log('getMaps')
        return this.http.get('http://localhost:3000/api/maps')
    }


    getMaps2(dataFileName): Observable<any> {
      	console.log('getMaps2')
        return this.http.get("http://d2qnyrq2dk7zba.cloudfront.net/"+dataFileName)
    } 



    getMaps3(dataFileName): Observable<any> {
        //定义self为this的作用
        var self = this;
        console.log('getMaps3');
        //获得网址的文件以及map：定义全局变量._collection为调用函数parser的返回值collection
        return this.http.get("http://d2qnyrq2dk7zba.cloudfront.net/"+dataFileName)
                        .map(( collection)=> {console.log('safasdf');
                            //将局部变量parser.parse(collection)转变为全局变量_collection
                            self._collection = this.parser.parse(collection);
                            //返回全局变量self._collection
                            return  self._collection;
                        })
    }

}
