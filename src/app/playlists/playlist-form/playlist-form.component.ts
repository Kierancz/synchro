import { Component, OnInit } from '@angular/core';
import { Playlist } from '../playlist.model';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.css']
})
export class PlaylistFormComponent implements OnInit {
  playlist: Playlist;

  constructor(private playlistSvc: PlaylistService) { }

  createPlaylist(name: HTMLInputElement, description: HTMLInputElement) {
    console.log(`creating new playlist, name: ${name.value} and description: ${description.value}`);
    this.playlist = new Playlist(name.value, description.value);
    this.playlistSvc.createPlaylist(this.playlist);
  }

  ngOnInit() {
  }

}