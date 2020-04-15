import { Component } from '@angular/core';

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

  constructor() { }

}
