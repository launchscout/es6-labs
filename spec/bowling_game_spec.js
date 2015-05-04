import Game from "./game.es6.js"

describe("Game", function() {
  it("should calculate simple scores", function() {
    expect(new Game([0, 1, 2, 3, 4, 0, 1, 2, 3, 4]).score()).toEqual(20);
  });
});
