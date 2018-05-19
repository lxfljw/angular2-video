import { Component, OnInit, Inject} from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ManagementService} from './service/management.service';

@Component({
    selector: 'app-parking-management',
    templateUrl: './management.component.html',
    styleUrls: ['./management.component.scss'],
})

export class ManagementComponent implements OnInit {
    _collection;
    a;
    date;
    _datas;
    fn;
    abq;
    user = 1;
    parking_id = 2;
    space_id  = 3;              
    constructor(
   		private managementService: ManagementService,
        private formBuilder: FormBuilder,
        private http: Http
    ){}
  
    ngOnInit(){
        //this.getUserInfo();

        console.log('test message');
    }
//-=-=-=-=-================----------label-----------=========================
    public video = [
                {label:'1',value:'1'},
                {label:'2',value:'2'},
                {label:'3',value:'3'},
                {label:'4',value:'4'},
                {label:'5',value:'5'},
                {label:'6',value:'6'},
                {label:'7',value:'7'},
                {label:'8',value:'8'},
                {label:'9',value:'9'},
                {label:'10',value:'10'},
                    ];
                

//==============================================================================
 /*   getUserInfo(){
    
    	this.managementService.getUserInfo().subscribe(
            res=>{console.log(res)},
            error => { console.log(error)},
            
        );


    this.managementService.getUserInfo().subscribe(
        collection =>{
        this._collection = collection;
        console.log(this._collection[1].url);
        }
     );
    }

*/
//========================================================================
//-------------------------------------------------------------------------
    getdownload(){
       // console.log(this._collection);
        //console.log(event);

        this.managementService.getUserInfo1().subscribe(
        datas =>{
        this._datas = datas;
        //console.log(this._collection[1].url);
        }
     )

    }

    getVideoInfo(event){

        this.date = <HTMLInputElement>document.getElementById('date');
        this.fn = <HTMLInputElement>document.getElementById('filename');
        this.abq = <HTMLInputElement>document.getElementById('abq');
        this.abq.href='localhost:3000/v1/getvideo?fileName='+this.fn.value;
        console.log(this.abq)    
        var day = this.date.value;
        this.managementService.getVideoInfo(day).subscribe(
        b =>{
        var c = JSON.parse(b._body);
        var tb = document.querySelector('tbody');
        for(var i=0; i<c.length;i++){
        tb.innerHTML+=`<tr><td>${c[i].url}</td><td>${c[i].timestamp}</td><td>${c[i].name}</td></tr>`;
    }
    

        console.log(c[1]);
        }
        );
    }
//----------------------------------------------------------------------
//=======================================================================
    

    getParkingId(parking_id){
    	this.managementService.getParkingId(parking_id).subscribe(
            res=>{console.log(res)},
            error => { console.log(error)}
        );
    }

    getParkingIdLog(parking_id){
        this.managementService.getParkingIdLog(parking_id).subscribe(
            res=>{console.log(res)},
            error => { console.log(error)}
        );
    }

    getParkingInfo(parking_id,space_id){
    	this.managementService.getParkingInfo(parking_id,space_id).subscribe(
            res=>{console.log(res.data)},
            error => { console.log(error)}
        );
    }

}
