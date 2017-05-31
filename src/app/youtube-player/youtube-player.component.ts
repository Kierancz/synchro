import { Component, Input } from '@angular/core';


@Component({
  selector: 'yt-player',
  styleUrls: ['youtube-player.component.css'],
  template: `<youtube-player
  [videoId]="id"
  (ready)="savePlayer($event)"
  (change)="onStateChange($event)"
  ></youtube-player>
  `
})
export class YoutubePlayerComponent {
  private player;
  private ytEvent;

  constructor() {
    console.log("player component: ", this) }

  savePlayer (player) {
    this.player = player;
    console.log('player instance', player)
  }

  onStateChange(event){
    console.log('player state', event.data);
    this.ytEvent = event.data;
  }
  
  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }
}
