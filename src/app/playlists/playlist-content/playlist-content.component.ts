import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { PlaylistService }          from '../playlist.service';
import { Playlist }                 from '../playlist.model';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-playlist-content',
  templateUrl: './playlist-content.component.html',
  styleUrls: ['./playlist-content.component.css']
})
export class PlaylistContentComponent implements OnInit {
  playlist: Playlist;
  id: number;

  constructor(
    private playlistSvc: PlaylistService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
   
  }

}
