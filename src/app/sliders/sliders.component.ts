import { Component,Output, OnInit,EventEmitter} from '@angular/core';



@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css'],
})

export class SlidersComponent implements OnInit {

	@Output() onDatePicked: EventEmitter<any> = new EventEmitter<any>();
	private parentNativeElement: any;
	dataFileName = '20140101.json';
	val: number;

	e = 1;
    constructor(){}
	    ngOnInit() {


				this.handleChange(this.e);
	    }
	handleChange(e) {
			this.e = this.val;
			this.onDatePicked.emit(e); 
			console.log(this.e);
	}




}

