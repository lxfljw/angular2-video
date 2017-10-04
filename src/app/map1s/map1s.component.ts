import { Component, OnInit, Inject,ElementRef} from '@angular/core';
//导入D3服务器等东西
import { D3Service, D3, Selection } from 'd3-ng2-service'; 
import * as d3 from 'd3';

@Component({
  selector: 'app-map1s',
  templateUrl: './map1s.component.html',
  styleUrls: ['./map1s.component.css'],
})

export class Map1sComponent implements OnInit {
        //定义变量
        svg;
        g;
        //定义一个parking的数组
        parkings = [{
            x:30,
            y:20,
            occupied:0,
            width: 500,
            height: 800 }];
        constructor(){}
        ngOnInit() {
                //选择id=parking中的全选属性中的移除
                d3.select('#parking').selectAll('*').remove();
                //定义svg为id=parking并附上标签为svg
                let svg = d3.select('#parking').append('svg')
                //定义g为svg中附上g的标签
                let g = svg.append('g')
                //定义spot为g中全选(.spot)中的数据的变量为this.parking
                let spot = g.selectAll('.spot').data(this.parkings)
                //下面给长方形的属性赋予方法
                spot.enter().append('rect')
                        .attr('class', 'spot')
                        //赋予X为data里的y
                        .attr('x', d => d.x)
                        //赋予X为data里的x                        
                        .attr('y', d => d.y)
                        //赋予宽为300
                        .attr('width', d => 300)
                        //赋予高为500
                        .attr('height', d => 500)
                        //赋予填充为#dc3912颜色
                        .attr("fill", function(d,i) { return "#dc3912"} );

        }          
}
