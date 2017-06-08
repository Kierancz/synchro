import { Component, OnInit } from '@angular/core';
import { Playlist } from '../playlist.model';
import { PlaylistService } from '../playlist.service';
import { FormBuilder, FormGroup, FormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.css']
})
export class PlaylistFormComponent {
  playlist: Playlist = new Playlist()

  constructor(private playlistSvc: PlaylistService) { }

  createPlaylist() {
    this.playlistSvc.createPlaylist(this.playlist);
  }

}