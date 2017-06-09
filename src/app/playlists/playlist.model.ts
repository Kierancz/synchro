export class Playlist {
  id: number;
  $key: string;
  name: string;
  description: string;
  votes: number;
  timeStamp: any;
  creatorId: string;
  creatorName: string;
  collaborators: Array<string>;
  items: Array<any>;

  constructor() {
    this.votes = 0;
    this.timeStamp = new Date().toUTCString();
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }
}