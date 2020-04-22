import { Component, ElementRef, ViewChild } from '@angular/core';
declare  var Kaleidoscope:  any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  viewer: any;
  sources = [
    '../../assets/cool.mp4',
    '../../assets/ClashofClans.mp4'
  ]
  newScrollPointX = 0; // 現在のスクロールX位置
  newScrollPointY = 0; // 現在のスクロールY位置
  scrollPointX = 0; // 現在のスクロール位置との比較用
  scrollPointY = 0; // 現在のスクロール位置との比較用
  //@ViewChild('container360') containerSelector;

  constructor() {
  }

  ngOnInit() {
    setTimeout(()=>{
      this.start();
    }, 3000)
  }
  
  start() {
     var containerSelector = '#container360';
      this.viewer = new Kaleidoscope.Video({
          source: this.sources[1],// './assets/cool.mp4',
          containerId: containerSelector,
          height: window.innerHeight,
          width: window.innerWidth
      });
      this.viewer.render();
      window.onresize = this.viewer.setSize({height: window.innerHeight, width: window.innerWidth});
      
      document.querySelector(containerSelector).addEventListener('touchend', this.viewer.play.bind(this.viewer));
      // document.body.addEventListener('click', function() {
      //     this.viewer.play();
      // }.bind(this));

  }


}
