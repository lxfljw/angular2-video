import { Component, OnInit, } from '@angular/core';
import { DataParser } from '../dataParser';
import { MapService } from '../services/map.service';


@Component({
  selector: 'app-Stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})


export class StatsComponent implements OnInit {

 		_collection;
		dataFileName = '20140101.json';
		value: Date;
	    constructor(
	    		private mapService:  MapService
	    		){}

	    ngOnInit() {
    			this.getMaps(this.dataFileName); 
	    }

	    //从mapService的方法getMap3中导入经过处理的数据collection
		getMaps(dataFileName) {
				var self = this;
				this.mapService.getMaps3(dataFileName).subscribe(
				      collection => {
				        console.log('ddff');
				        console.log(collection);
				        console.log( collection.parkingEvents);
				        self._collection = collection;
				      }
				)
		}
		//判断该车位是那种情况，然后在那种情况里面增加1，即增加停车点的统计

}