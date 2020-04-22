import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
    <header class="header">
      <mat-toolbar>
        <span class="play-icon"></span>
        <span class="spacer"></span>
        <h1>PWA Test HLS/360 degree</h1>
      </mat-toolbar>
    </header>
  `,
  styleUrls: ['./app-toolbar.component.scss']
})
export class AppToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
