const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", (accounts) => {
  it("should return the initial greeting", async () => {
    const instance = await HelloWorld.deployed();
    const greeting = await instance.getGreeting();
    assert.equal(
      greeting,
      "Hello, World!",
      "The initial greeting is not correct"
    );
  });

  it("should set a new greeting", async () => {
    const instance = await HelloWorld.deployed();
    await instance.setGreeting("Hello, Truffle!");
    const greeting = await instance.getGreeting();
    assert.equal(
      greeting,
      "Hello, Truffle!",
      "The new greeting is not set correctly"
    );
  });
});
