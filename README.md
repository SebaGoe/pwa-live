# Node

v10.16.0

# Angular

Angular CLI: 6.0.8
Node: 10.16.0
OS: darwin x64
Angular: 6.1.10
... animations, common, compiler, compiler-cli, core, forms
... http, language-service, platform-browser
... platform-browser-dynamic, router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.6.8
@angular-devkit/build-angular     0.6.8
@angular-devkit/build-optimizer   0.6.8
@angular-devkit/core              0.6.8
@angular-devkit/schematics        0.6.8
@angular/cdk                      6.4.7
@angular/cli                      6.0.8
@angular/material                 6.4.7
@ngtools/webpack                  6.0.8
@schematics/angular               0.6.8
@schematics/update                0.6.8
rxjs                              6.5.5
typescript                        2.7.2
webpack                           4.8.3

# Install/Build

$ npm install

$ ng build --prod
$ npm run pwa

ngrok ダウンロード
ダッシュボードの１−３番設定したらターミナルでローンチ
$ ./ngrok http 8080
httpsのURLをブラウサーで開く

モバイルの場合：センサーが反応します。Orientationのみテスト実施
デスクトップ：センサーないため、なしです。

HLSのリンクは３箇所から引っ張ってるストリーム
１番と２番はビデオの長さが決まってるが３番目はフランスのテレビライブ映像

HLS.jsは世界でいろんなサイト実際に使われてる（Twittterなど）

# Orientation

1年ほど前のセンサーテストプロジェクトから使ってる：https://github.com/silveridea/pwa-features
もしもこれを実施する場合はリポシトリーの説明通りで使えますがHTTPSでないとセンサーなどは反応しない。

# Main App

HLS Player (Sean Brage): https://github.com/bearguns/HLSPlayer

# HLSPlayer

HLS Player provides a real-world example of implementing [HLS](https://en.wikipedia.org/wiki/HTTP_Live_Streaming) video playback in a web application. [View the live application here.](https://hlsplayer-f71f2.firebaseapp.com/)

## Core Technologies
HLS Player is built with:

* [Angular 6](https://angular.io)
* [TypeScript](https://typescriptlang.org)
* [ngRx + RxJS](https://github.com/ngrx/platform)
* [Angular Material](https://material.angular.io)
* [HLS.js](https://github.com/video-dev/hls.js/tree/master) 

