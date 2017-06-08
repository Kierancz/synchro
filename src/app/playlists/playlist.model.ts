export class Playlist {
  id: number;
  $key: string;
  name: string;
  description: string;
  votes: number;
  timeStamp: Date;

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }
}