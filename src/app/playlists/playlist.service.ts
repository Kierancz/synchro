import { Injectable } from '@angular/core';
import { 
  FirebaseListObservable, 
  FirebaseObjectObservable, 
  AngularFireDatabase } from "angularfire2/database";
import { Playlist } from './playlist.model';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlaylistService {

  private basePath: string = '/playlists';
  private playlistPath: string = '/playlist';

  playlists: FirebaseListObservable<any> = null;
  playlist: FirebaseObjectObservable<any> = null;


  constructor(
    private db: AngularFireDatabase, 
    private http: Http) {
  }

  getPlaylists(query={}): FirebaseListObservable<any> {
    this.playlists = this.db.list(this.basePath, {
      query: query
    });
    return this.playlists
  }

  getPlaylist(key: string): FirebaseObjectObservable<any> {
    const playlistPath = `${this.basePath}/${key}`;
    this.playlist = this.db.object(playlistPath)
    return this.playlist
  }
  //TODO find playlist by ID property from Firebase or change to keys
  getPlaylistByID(id: number): Promise<Playlist> {
    const url = `${this.playlistPath}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Playlist)
      .catch(this.handleError);
  }

  /*getPlaylistRoute(id: number): Promise<Playlist> {
    return this.getPlaylists()
               .then(playlists => playlists.find(playlist => playlist.id === id));
  }*/

  createPlaylist(playlist: Playlist): void  {
    this.playlists.push(playlist)
      .catch(error => this.handleError(error))
  }
  // Update an existing playlist
  updatePlaylist(key: string, value: any): void {
    this.playlists.update(key, value)
      .catch(error => this.handleError(error))
  }

  // Deletes a single playlist
  deletePlaylist(key: string): void {
    this.playlists.remove(key)
      .catch(error => this.handleError(error))
  }

  // Deletes the entire list of playlists
  deleteAll(): void {
    this.playlists.remove()
      .catch(error => this.handleError(error))
  }


  // Default error handling for all actions
  private handleError(error) {
    console.log(error)
  }

}
