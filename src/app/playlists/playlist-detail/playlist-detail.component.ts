import { Component, OnInit, Input } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../playlist.model'
import { AuthService } from '../../auth.service';
import { 
  Router, 
  ActivatedRoute, 
  Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {

  @Input() playlist: Playlist;
  isOwner: boolean;

  constructor(
    private playlistSvc: PlaylistService, 
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router) { }

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

  onSelect(playlist: Playlist) {
    this.router.navigate(['/playlist', playlist.id])
  }

  ngOnInit() {
    this.isOwner = this.playlist.creatorId == this.auth.currentUserId

    this.route.params
    .switchMap((params: Params) => this.playlistSvc.getPlaylistByID(+params['id']))
    .subscribe((playlist: Playlist) => this.playlist = playlist);
  }
}
