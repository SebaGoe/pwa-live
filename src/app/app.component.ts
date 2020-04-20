import { Component, ElementRef, ViewChild } from '@angular/core';
//import {PanoViewer} from "@egjs/view360"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  newScrollPointX = 0; // 現在のスクロールX位置
  newScrollPointY = 0; // 現在のスクロールY位置
  scrollPointX = 0; // 現在のスクロール位置との比較用
  scrollPointY = 0; // 現在のスクロール位置との比較用
  element =  window.document.getElementById("myPanoViewer");
  element2: any;
  @ViewChild('container') container: HTMLElement;
  @ViewChild('pano_video') videoEl: HTMLVideoElement;

  //container = document.querySelector(".container");
  //videoEl = document.getElementById("pano_video");
//   panoViewer = new PanoViewer(this.container, {
//     video: this.videoEl
// });

  constructor() { }
  
  openView() {
    // this.element2 = new PanoViewer(
    //   window.document.getElementById("myPanoViewer")
    // );
  }

}
