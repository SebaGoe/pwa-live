import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Stream } from '../../store/models/stream';
import { VideoPlayerState } from '../../store/store.state';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']

})
export class VideoPlayerComponent {

  state$: Observable<any>;
  stream: Stream;
  test: string;


  constructor(private store: Store<VideoPlayerState>) {}

  ngOnInit() {
    this.state$ = this.store.select('videoPlayer');
    this.state$.subscribe(
      (val:any) => {
        this.stream = val.selectedStream;
      }
    )
  }


}
