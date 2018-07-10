import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  zoomTime = false;
  constructor(public navCtrl: NavController) {
  console.log('zoomTime',this.zoomTime);
  }

  ngOnInit () {
    setTimeout((() => {
      this.zoomTime=true;
      console.log('zoomTime',this.zoomTime);
    }), 200);
    console.log('zoomTime',this.zoomTime);
  }


}
