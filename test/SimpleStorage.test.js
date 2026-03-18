import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.connect();

describe("SimpleStorage", function () {
  let simpleStorage;
  let owner;
  let otherAccount;

  beforeEach(async function () {
    [owner, otherAccount] = await ethers.getSigners();
    simpleStorage = await ethers.deployContract("SimpleStorage");
  });

  it("should start with zero items", async function () {
    expect(await simpleStorage.getItemCount()).to.equal(0);
  });

  it("should add a new item and return its id", async function () {
    const tx = await simpleStorage.addItem("Laptop", 1500);
    const receipt = await tx.wait();
    const event = receipt.logs.find(
      (log) => simpleStorage.interface.parseLog(log)?.name === "ItemAdded"
    );
    const parsed = simpleStorage.interface.parseLog(event);
    expect(parsed.args.name).to.equal("Laptop");
    expect(parsed.args.value).to.equal(1500n);
  });

  it("should retrieve an item by id", async function () {
    await simpleStorage.addItem("Book", 30);
    const item = await simpleStorage.getItem(1);
    expect(item.name).to.equal("Book");
    expect(item.value).to.equal(30n);
    expect(item.owner).to.equal(owner.address);
  });

  it("should allow the owner to update their item", async function () {
    await simpleStorage.addItem("Old Name", 100);
    await simpleStorage.updateItem(1, "New Name", 200);
    const item = await simpleStorage.getItem(1);
    expect(item.name).to.equal("New Name");
    expect(item.value).to.equal(200n);
  });

  it("should revert if a non-owner tries to update an item", async function () {
    await simpleStorage.addItem("Protected Item", 999);
    await expect(
      simpleStorage.connect(otherAccount).updateItem(1, "Hacked", 0)
    ).to.be.revertedWith("Only item owner can update");
  });

  it("should revert when getting a non-existent item", async function () {
    await expect(simpleStorage.getItem(999)).to.be.revertedWith(
      "Item does not exist"
    );
  });

  it("should track item count correctly", async function () {
    await simpleStorage.addItem("Item A", 1);
    await simpleStorage.addItem("Item B", 2);
    await simpleStorage.addItem("Item C", 3);
    expect(await simpleStorage.getItemCount()).to.equal(3);
  });
});
