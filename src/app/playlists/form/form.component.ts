import { Component, OnInit } from '@angular/core';
import { Playlist } from '../playlist.model'

@Component({
  selector: 'playlist-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  playlists: Playlist[];

  constructor() { }

  newPlaylist(name: HTMLInputElement, description: HTMLInputElement) {
    console.log(`creating new playlist, name: ${name.value} and description: ${description.value}`)
  }

  ngOnInit() {
  }

}
