import { Component, ElementRef, ViewChild } from '@angular/core';
//import {PanoViewer} from "@egjs/view360"
declare  var Kaleidoscope:  any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  viewer: any;
  //Kaleidoscope = kaleidoscope;
  test(){
    var Kaleidoscope = kaleidoscope.value;
  }

  newScrollPointX = 0; // 現在のスクロールX位置
  newScrollPointY = 0; // 現在のスクロールY位置
  scrollPointX = 0; // 現在のスクロール位置との比較用
  scrollPointY = 0; // 現在のスクロール位置との比較用
  element =  window.document.getElementById("myPanoViewer");
  element2: any;
  @ViewChild('container') container: HTMLElement;
  @ViewChild('pano_video') videoEl: HTMLVideoElement;
  //@ViewChild('container360') containerSelector;

  //container = document.querySelector(".container");
  //videoEl = document.getElementById("pano_video");
//   panoViewer = new PanoViewer(this.container, {
//     video: this.videoEl
// });

  constructor() {
  }

  
  start() {
     var containerSelector = '#container360';
      this.viewer = new Kaleidoscope.Video({
          source: '../../assets/cool.mp4',// './assets/cool.mp4',
          containerId: containerSelector,
          height: window.innerHeight,
          width: window.innerWidth
      });
      this.viewer.render();
      window.onresize = this.viewer.setSize({height: window.innerHeight, width: window.innerWidth});
      
      document.querySelector(containerSelector).addEventListener('touchend', this.viewer.play.bind(this.viewer));
      document.body.addEventListener('click', function() {
          this.viewer.play();
      }.bind(this));

  }
  openView() {
    // this.element2 = new PanoViewer(
    //   window.document.getElementById("myPanoViewer")
    // );
  }

}
