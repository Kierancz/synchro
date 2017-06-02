export class Playlist {
  $key: string;
  name: string;
  description: string;
  votes: number;
  timeStamp: Date;

  constructor(name: string, description: string, votes?: number, timeStamp?: Date) {
    this.name = name;
    this.description = description;
    this.votes = votes || 0;
    this.timeStamp = new Date();
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }
}