import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Retro Barcode Generator';
  color = ['blue', 'aqua', 'red', 'green','teal'];
  arr = [];

	randcolor(){
	  for (var i = 0; i < 10; i++) {
	  	var num = (Math.floor(Math.random() * 5));
	  	this.arr.push(this.color[num])
	  }
	} 

	ngOnInit(){
		this.randcolor();
	}
}
