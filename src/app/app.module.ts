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
  MdIconModule } from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { YouTubeSearchComponent } from './youtube-search/youtube-search.component';
import { SearchResultComponent } from './youtube-search/search-result.component';
import { SearchBoxComponent } from './youtube-search/search-box.component';
import { youTubeSearchInjectables } from './youtube-search/youtube-search.injectables';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';


import { AUTH_PROVIDERS } from './auth.service';
import { LoggedInGuard } from './logged-in.guard';
import { NavComponent } from './nav/nav.component';


const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  // authentication
  { path: 'login', component: LoginComponent },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [ LoggedInGuard ]
  }
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
    ProtectedComponent,
    NavComponent

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
    FlexLayoutModule,
    RouterModule.forRoot(routes) // import & install routes
  ],
  providers: [
    youTubeSearchInjectables,
    // uncomment this for "hash-bang" routing
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AUTH_PROVIDERS,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
