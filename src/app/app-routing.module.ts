import { NgModule } from '@angular/core';
import { 
  RouterModule, 
  Routes, 
  CanActivate } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { ProfileComponent } from './users/profile/profile.component';
import { PlaylistListComponent } from './playlists/playlist-list/playlist-list.component';
import { PlaylistContentComponent } from './playlists/playlist-content/playlist-content.component';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'playlists', component: PlaylistListComponent, canActivate: [AuthGuard] },
  { path: 'playlist/:id', component: PlaylistContentComponent },
  /*
    { path: 'playlists', 
    component: PlaylistListComponent,
    children:  [
      { path: '', redirectTo: 'playlists', pathMatch: 'full' }, 
      { path: ':id', component: PlaylistContentComponent }
    ]
  },
  */

  // authentication
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}