# Web3 / Blockchain Daily Learning

A personal journal of daily blockchain and smart contract learning — notes, exercises, and Solidity contracts written from scratch.

---

## 🗂️ Repository Structure

```
web3/
├── contracts/          # Solidity smart contracts
├── scripts/            # Deployment scripts
├── test/               # Hardhat tests for each contract
└── notes/              # Daily learning notes
    ├── day-01/         # Solidity basics & Hello World
    └── day-02/         # Mappings, structs, and arrays
```

---

## 📅 Learning Log

| Day | Topic | Contract |
|-----|-------|---------|
| [Day 01](notes/day-01/README.md) | Solidity basics, state variables, modifiers, events | [HelloWorld.sol](contracts/HelloWorld.sol) |
| [Day 02](notes/day-02/README.md) | Structs, mappings, arrays, ownership | [SimpleStorage.sol](contracts/SimpleStorage.sol) |

---

## 🛠️ Setup

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm

### Install dependencies

```bash
npm install
```

### Compile contracts

```bash
npx hardhat compile
```

### Run tests

```bash
npx hardhat test
```

### Deploy locally

```bash
npx hardhat node          # Start local Hardhat node in one terminal
npx hardhat run scripts/deploy.js --network localhost  # Deploy in another
```

---

## 📚 Learning Roadmap

- [x] Day 01 – Solidity basics: state variables, constructors, modifiers, events
- [x] Day 02 – Data structures: structs, mappings, arrays
- [ ] Day 03 – Ether handling: `payable`, `msg.value`, `transfer`
- [ ] Day 04 – Inheritance and interfaces
- [ ] Day 05 – ERC-20 token standard
- [ ] Day 06 – ERC-721 NFT standard
- [ ] Day 07 – DeFi concepts: AMMs, liquidity pools

---

## 📖 Resources

- [Solidity Documentation](https://docs.soliditylang.org/)
- [Hardhat](https://hardhat.org/docs)
- [Ethereum Docs](https://ethereum.org/en/developers/docs/)
- [CryptoZombies](https://cryptozombies.io/) — interactive Solidity tutorial
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/)
