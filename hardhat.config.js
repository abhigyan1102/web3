import hardhatToolboxMochaEthers from "@nomicfoundation/hardhat-toolbox-mocha-ethers";
import { defineConfig } from "hardhat/config";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const solcPath = require.resolve("solc/soljson");

export default defineConfig({
  plugins: [hardhatToolboxMochaEthers],
  solidity: {
    profiles: {
      default: {
        version: "0.8.28",
        path: solcPath,
      },
    },
  },
});
