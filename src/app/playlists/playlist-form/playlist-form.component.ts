import { Component, OnInit } from '@angular/core';
import { Playlist } from '../playlist.model';
import { PlaylistService } from '../playlist.service';
import { AuthService } from "../../auth.service";
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.css']
})
export class PlaylistFormComponent {
  playlist: Playlist = new Playlist();

  constructor(
    private playlistSvc: PlaylistService, 
    public snackBar: MdSnackBar,
    public auth: AuthService) { }

  createPlaylist() {
    this.playlist.creatorId = this.auth.currentUserId;
    this.playlist.creatorName = this.auth.currentUserDisplayName;
    this.playlist.id = Date.now();
    this.playlistSvc.createPlaylist(this.playlist);
    console.log("playlist form date: ", this.playlist.timeStamp);
  }

  openSnackBar(message: any) {
    this.snackBar.openFromComponent(message, {
      duration: 1000,
    });
  }

  onSubmit() {
    console.log("form submitted!")
    this.openSnackBar("Playlist Created!")
  }
}