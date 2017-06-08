import { Component, OnInit, Input } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../playlist.model'


@Component({
  selector: 'playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent {

  @Input() playlist: Playlist;

  constructor(private playlistSvc: PlaylistService) { }

  updateTimeStamp() {
    let date = new Date()
    this.playlistSvc.updatePlaylist(this.playlist.$key, { timeStamp: date })
  }

  updateActive(value: boolean) {
    this.playlistSvc.updatePlaylist(this.playlist.$key, { active: value })
  }

  deleteplaylist() {
    this.playlistSvc.deletePlaylist(this.playlist.$key)
  }

}