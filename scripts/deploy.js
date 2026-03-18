import { network } from "hardhat";

const { ethers } = await network.connect();

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  const helloWorld = await ethers.deployContract("HelloWorld", ["Hello, Blockchain!"]);
  await helloWorld.waitForDeployment();
  console.log("HelloWorld deployed to:", await helloWorld.getAddress());

  const simpleStorage = await ethers.deployContract("SimpleStorage");
  await simpleStorage.waitForDeployment();
  console.log("SimpleStorage deployed to:", await simpleStorage.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
