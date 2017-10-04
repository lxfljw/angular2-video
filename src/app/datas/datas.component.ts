import { Component, OnInit, Inject} from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { DataService } from '../services/data.service';
import { ToastComponent } from '../shared/toast/toast.component';

//import {Socket} from 'ng-socket-io';
import * as io from "socket.io-client";


@Component({
  selector: 'app-datas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.scss'],
})





export class DatasComponent implements OnInit {

  socket = io('http://localhost:4000');
  data = {};
  datas = [];
  isLoading = true;
  isEditing = false;

  sendDataForm: FormGroup;
  id = new FormControl('', Validators.required);
  x = new FormControl('', Validators.required);
  y = new FormControl('', Validators.required);


  constructor(
              private dataService:  DataService,
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent) {}

//定义初始化函数
  ngOnInit() {
  //改服务器下的获取数据的方法
    this.getDatas();
    //定义发送数据表格为输入名字信息
    this.sendDataForm = this.formBuilder.group({
        id: this.id,
      x: this.x,
      y: this.y
    });
    //this为全局变量，将全局赋予局部变量self使得局部变量拥有全局变量this的作用。
    var self = this;

    //通过socket.io接受从服务器传回的信息
    this.socket.on('new-data',function(obj){
      //定义从服务器返回的消息为my_json文件
      const my_json = obj;
      console.log(my_json);
        //推送my_json文件中的数据到数组中
        self.datas.push(my_json);
        //在页面中输出两个服务起传回的数据
    });
  }

  getDatas() {

    this.dataService.getDatas().subscribe(

      data => this.datas = data,
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

  sendData() {
    this.dataService.sendData(this.sendDataForm.value).subscribe(
      res => {
        console.log('3333')
        const newData = res.json();
        console.log(newData);
        this.datas.push(newData);
        this.sendDataForm.reset();
        this.toast.setMessage('item sended successfully.', 'success');
     },
      error => console.log(error)
    );
  }

  comeData() {
    this.dataService.comeData().subscribe(
      data => this.datas = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  cancelEditing() {
    this.isEditing = false;
    this.data = {};
    this.toast.setMessage('item editing cancelled.', 'warning');
    
    //reload the datas to reset the editing;
    this.getDatas();
  }

  editData(data) {
    this.dataService.editData(data).subscribe(
      res => {
        this.isEditing = false;
        this.data = data;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }


  deleteData(data) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.dataService.deleteData(data).subscribe(
        res => {
          const pos = this.datas.map(elem => elem._id).indexOf(data._id);
          this.datas.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }
}
