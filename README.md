# Node

v10.16.0

# Angular

Angular CLI: 6.2.9
Node: 10.16.0
OS: darwin x64
Angular: 6.1.10
... animations, common, compiler, compiler-cli, core, forms
... http, language-service, platform-browser
... platform-browser-dynamic, router, service-worker

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.8.9
@angular-devkit/build-angular     0.8.9
@angular-devkit/build-optimizer   0.8.9
@angular-devkit/build-webpack     0.8.9
@angular-devkit/core              9.1.1
@angular-devkit/schematics        9.1.1
@angular/cdk                      6.4.7
@angular/cli                      6.2.9
@angular/material                 6.4.7
@angular/pwa                      0.901.1
@ngtools/webpack                  6.2.9
@schematics/angular               9.1.1
@schematics/update                0.8.9
rxjs                              6.0.0
typescript                        2.7.2
webpack                           4.16.4


angular-cliはバージョンによってエラーが起きる場合はCLIに@angular-devkit/build-angularを合わせる：
"
Angular CLI v8.3.19 -> 0.803.19
Angular CLI v8.3.17 -> 0.803.17
Angular CLI v7.3.8 -> 0.13.8
Angular CLI v6-lts -> 0.8.9
"
https://stackoverflow.com/questions/56393158/errors-data-path-buildersapp-shell-should-have-required-property-class

# Install/Build

$ npm install

$ ng build --prod

$ npm run pwa

ngrok ダウンロード： https://ngrok.com/
新しいアカウントを名前、メール、パスワードを設置
ダッシュボードの１−３番設定したらターミナルでローンチ

$ ./ngrok http 8080

httpsのURLをブラウサーで開く（そしたらローカルじゃなくても観覧可能になる）

モバイルの場合：センサーが反応します。Orientationのみテスト実施(Android 9, Chrome; iOS 12.4, Safari)
デスクトップ：センサーないため、なしです。

HLSのリンクは３箇所から引っ張ってるストリーム
１番と２番はビデオの長さが決まってるが３番目はフランスのテレビライブ映像

HLS.jsは世界でいろんなサイト実際に使われてる（Twittterなど）

# PWA

詳しくはこちら：　https://web.dev/pwa-checklist/
Manifest設定でPWAとして使えるようになった。
Serivce worker なしではオフラインでアクセスできないため、プッシュ通知も使えない。

# Orientation (Native Functions)

1年ほど前のセンサーテストプロジェクトから使ってる：https://github.com/silveridea/pwa-features
もしもこれを実施する場合はリポシトリーの説明通りで使えますがHTTPSでないとセンサーなどは反応しない。

OrientationなどをSafariで使うには設定でオンにするしかありません。その後は感知される：
https://medium.com/@firt/whats-new-on-ios-12-2-for-progressive-web-apps-75c348f8e945
Safari ー> 設定 -> モーション、オリエンテーションアクセス　オンにする

カメラやプッシュ通知も設定すればつけるはず。

# SSL

OpensslによってローカルのHttps通信もあり、package.jsonに設定済み。
Opensslの設定: https://medium.com/@richardr39/using-angular-cli-to-serve-over-https-locally-70dab07417c8
Win/Macでcertificate設定: https://medium.com/@rubenvermeulen/running-angular-cli-over-https-with-a-trusted-certificate-4a0d5f92747a


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

