import Foo from "./foo";

describe("Foo", function() {
  it("exists", function() {
    expect(Foo).toBeDefined();
  });
  beforeEach( () => {
    this.foo = new Foo();
  });
  it("quacks", () => {
    expect(this.foo.quack()).toEqual("quack!")
  });
  it("quacks", () => expect(this.foo.barf()).toEqual(4));

});
