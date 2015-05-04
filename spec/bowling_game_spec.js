import Game from "./game.es6.js"

describe("Game", function() {
  it("should calculate simple scores", function() {
    expect(new Game([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).score()).toEqual(45);
  });
});
