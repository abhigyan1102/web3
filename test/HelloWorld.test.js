import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.connect();

describe("HelloWorld", function () {
  let helloWorld;
  let owner;
  let otherAccount;

  beforeEach(async function () {
    [owner, otherAccount] = await ethers.getSigners();
    helloWorld = await ethers.deployContract("HelloWorld", ["Hello, Blockchain!"]);
  });

  it("should set the initial message and owner on deployment", async function () {
    expect(await helloWorld.getMessage()).to.equal("Hello, Blockchain!");
    expect(await helloWorld.owner()).to.equal(owner.address);
  });

  it("should allow the owner to update the message", async function () {
    await helloWorld.updateMessage("Learning Web3!");
    expect(await helloWorld.getMessage()).to.equal("Learning Web3!");
  });

  it("should emit a MessageUpdated event when the message is updated", async function () {
    await expect(helloWorld.updateMessage("New Message"))
      .to.emit(helloWorld, "MessageUpdated")
      .withArgs("Hello, Blockchain!", "New Message", owner.address);
  });

  it("should revert if a non-owner tries to update the message", async function () {
    await expect(
      helloWorld.connect(otherAccount).updateMessage("Hacked!")
    ).to.be.revertedWith("Only owner can call this function");
  });
});
