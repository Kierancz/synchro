export class Playlist {
  $key: string;
  name: string;
  description: string;
  votes: number;
  timeStamp: Date;
  active: boolean;

  constructor(name: string, description: string, votes?: number) {
    this.name = name;
    this.description = description;
    this.votes = votes || 0;
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }
}