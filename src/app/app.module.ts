import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { 
  RouterModule, 
  Routes } from '@angular/router';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MdButtonModule, 
  MdCardModule, 
  MdMenuModule, 
  MdToolbarModule, 
  MdIconModule,
  MdInputModule
   } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { YouTubeSearchComponent } from './youtube-search/youtube-search.component';
import { SearchResultComponent } from './youtube-search/search-result.component';
import { SearchBoxComponent } from './youtube-search/search-box.component';
import { youTubeSearchInjectables } from './youtube-search/youtube-search.injectables';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from '../config';
import { AuthService } from './auth.service';
import { AuthGuard} from './auth.guard';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './users/login/login.component';
import { ProfileComponent } from './users/profile/profile.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { ListComponent } from './playlists/list/list.component';
import { FormComponent } from './playlists/form/form.component';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'playlists', component: ListComponent },

  // authentication
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    YouTubeSearchComponent,
    SearchResultComponent,
    SearchBoxComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    ProfileComponent,
    YoutubePlayerComponent,
    ListComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    FlexLayoutModule,
    Angular2FontawesomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes), // import & install routes
    YoutubePlayerModule
  ],
  providers: [
    youTubeSearchInjectables,
    AuthService,
    AuthGuard,
    // uncomment this for "hash-bang" routing
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);
