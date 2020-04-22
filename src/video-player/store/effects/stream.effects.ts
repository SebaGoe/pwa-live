import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Stream } from '../models/stream';
import * as StreamActions from '../actions/stream.actions';

const streams: Stream[] = [ // just pretending that we are loading data from an API in this effect.
    {
      id: 1,
      poster: "https://bitdash-a.akamaihd.net/content/sintel/poster.png",
      title: 'Sintel',
      src: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
    },
    {
      id: 2,
      poster: "http://jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png",
      title: 'Big Buck Bunny',
      src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8 '
    },
    {
      id: 3,
      poster: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",
      title: "Test stream (HTTP)",
      src: "http://live.lachainenormande.fr:80/live/lcn/livestream/playlist.m3u8"
    }
  ];


@Injectable()
export class StreamEffects {
  @Effect()
  fetch$: Observable<Action> = this.actions$.pipe(
    ofType(StreamActions.FETCH_STREAMS),
    map(action => ({ type: StreamActions.SET_STREAMS, payload: streams }))
  );

  constructor(private actions$: Actions) {}
}
