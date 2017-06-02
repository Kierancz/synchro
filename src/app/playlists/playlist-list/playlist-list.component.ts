import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { FirebaseListObservable } from "angularfire2/database";


@Component({
  selector: 'playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.css']
})
export class PlaylistListComponent implements OnInit {

  public playlists: FirebaseListObservable<any>;

  constructor(private playlistSvc: PlaylistService) { }

  ngOnInit() {
    this.playlists = this.playlistSvc.getPlaylists({limitToLast: 5})
  }

}
