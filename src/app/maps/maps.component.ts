import { Component,Input, Output,OnInit, Inject,ElementRef, AfterViewInit,ViewEncapsulation,EventEmitter} from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service'; 

import * as L from 'leaflet';
import * as d3 from 'd3';
import { geoTransform,geoProjection,geoPath } from "d3-geo";
import { MomentModule } from 'angular2-moment';
export { select} from "d3-selection";



import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { MapService } from '../services/map.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Spot } from '../models/spot';
//import { DataParser } from '../dataParser';


@Component({
  //地图上的坐标点调色
  encapsulation: ViewEncapsulation.None,

  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})




export class MapsComponent implements OnInit {

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  @Input() private data:any;

  //private d3: D3; 
  private parentNativeElement: any;
  

  params = {};
  id = [];
  spot = [];

//  parser;


  isLoading = true;
  isEditing = false;
  minute;
  //currentDate;
  _svg;
  _g;
  _collection;
  _path;
  _feature;
  parkingViolations: 0;
  parkingEvents: 0;
  dayStats = Array(1441);
  map;
  mapLayerURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  constructor(
              private mapService:  MapService,
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent,
              ){}


  //初始化地图的函数
  initMap(){
        console.log('init map');
        //定义地图的中心点和最小的聚焦倍数
        this.map = L.map('mapid', {
            center: L.latLng(38, 15),
            zoom: 5,
        });
        console.log('oh no');
        //定义osm中地图的最小聚焦和最大聚焦
        var osm = L.tileLayer(this.mapLayerURL, {minZoom: 3, maxZoom: 18});
        //设置地图的观察点
        this.map.setView(L.latLng(-37.8100506, 144.961825), 16);
        this.map.addLayer(osm);
        console.log('hello'); 
  }

//定义初始化函数
  ngOnInit() {

      //函数初始化
//    this.parser= new DataParser();
      console.log('init()');
      if( this.map == null ) this.initMap();
      console.log('gogoogogo');

      //地图上的点层的设置
      d3.select('#leaflet-overlay-pane').selectAll('*').remove();
      this._svg = d3.select('#leaflet-overlay-pane').append("svg");
      this._g = this._svg.append("g").attr("class", "leaflet-zoom-hide");
//    console.log('init()');
  }

  ngAfterViewInit(){
      //定义数据文件名为该时刻的精确数的格式为‘YYYYMMDD.json’
      //var dataFileName = moment(currentDate).format('YYYYMMDD') + '.json';
      var dataFileName = '20140101.json';
      //判断如果地图为无效的，则打印出地图无效，否则打印出地图有效
      if( this.map == null )  console.log('map null')
      else console.log('map ! null')
    //调用getMaps()函数且变量为dataFileName
    this.getMaps(dataFileName); 
  }   




//从服务器mean中获取.json提车点的数据
  getMaps(dataFileName) {
      var self = this;
      if( this.map == null )  console.log('map null')
      else console.log('map ! null')

//      this.minute = this.data;
      //调用前段服务点mapService中的getMap3方法
      this.mapService.getMaps3(dataFileName).subscribe(
        collection => {
          console.log('ddff');
          console.log(collection);

          //数据解析
  //        self._collection = this.parser.parse(collection)

          self._collection = collection;

          var transform = geoTransform({point: function(x,y){
              var point = self.map.latLngToLayerPoint(new L.LatLng(y,x));
              this.stream.point(point.x, point.y);

          }});
          
          self._path = geoPath(transform);
          self._feature = self._g.selectAll("path")
                              .data(self._collection.features)
                              .enter().append("path")
                              .attr("d", self._path)
                           //   .on( "mouseout" ,  function(d) { console.log(d); })
                              .on( "click" ,  function(d) { 
                                    console.log(d);
                              //点击上传数据到home.component
                                    self.notify.emit(d); 
                              })
                          //    .on( "mouseout" ,  function(d) { console.log(d); });

          //调用update()函数
          this.update();
      }
    );   
  }
  //update()函数，更新且判断地图上的坐标点的实时情况
  update( ){
        var self = this;
        d3.select("#leaflet-overlay-pane svg").selectAll("path").attr("class", function (d) {

                var key = d.properties.bayId;
                var bayStatus;
//                console.log(self.minute);


                switch (d.properties.parkingData[self.minute]) {
                  case 0:
                    bayStatus = 'parking-no-monitoring';
                    break;
                  case 1:
                    bayStatus = 'parking-empty';
                    break;
                  case 2:
                    bayStatus = 'parking-taken';
                    break;
                  case 3:
                    bayStatus = 'parking-will-violate';
                    break;
                  case 4:
                    bayStatus = 'parking-in-violation';
                    break;
                }

                return bayStatus;

        });  
  }
  refresh(min){
      this.minute = min;
      console.log(this.minute);
      this.update( );
  }

}
