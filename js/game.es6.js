export default class Game {
  constructor(scores) {
    this.scores = scores;
  }

  score() {
    return this.scores.reduce( (score1, score2) => score1 + score2 );
  }
}
