import { Component } from '@angular/core';
import {
  Router
} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;
  playlists: FirebaseListObservable<any[]>;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, private router: Router) {
    this.playlists = af.list('/playlists', {
      query: {
        limitToLast: 50
      }
    });

    this.user = this.afAuth.authState;
  };

  logout() {
    this.afAuth.auth.signOut();
  }
}
