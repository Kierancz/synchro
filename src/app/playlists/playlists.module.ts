import { 
  RouterModule, 
  Routes } from '@angular/router';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { PlaylistContentComponent } from './playlist-content/playlist-content.component';

export const routes: Routes = [
  { path: '', redirectTo: 'playlists', pathMatch: 'full' }, 
  { path: 'playlists', component: PlaylistListComponent },
  { path: ':id', component: PlaylistContentComponent }
];