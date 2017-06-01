export class Playlist {
  name: string;
  description: string;
  votes: number;

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