# Day 01 – Solidity Basics & Hello World

## Topics Covered

- What is Solidity?
- Smart contract structure: `pragma`, `contract`, state variables, functions
- Deploying a simple "Hello World" contract
- The `msg.sender` global variable
- Access control with `modifier`
- Events in Solidity

## Key Concepts

### State Variables
Variables stored permanently on the blockchain. They cost gas to write and are free to read from on-chain code.

```solidity
string public message;  // stored on-chain, publicly readable
address public owner;   // address type for Ethereum accounts
```

### Constructor
Runs once when the contract is deployed.

```solidity
constructor(string memory _message) {
    message = _message;
    owner = msg.sender; // deployer becomes the owner
}
```

### Modifiers
Reusable guards attached to functions to enforce conditions before execution.

```solidity
modifier onlyOwner() {
    require(msg.sender == owner, "Only owner can call this function");
    _; // continues executing the function body
}
```

### Events
Logs emitted to the blockchain, cheap to produce and useful for off-chain consumers.

```solidity
event MessageUpdated(string oldMessage, string newMessage, address updatedBy);
```

## Contract: HelloWorld.sol

See [`contracts/HelloWorld.sol`](../../contracts/HelloWorld.sol)

## Resources

- [Solidity Docs](https://docs.soliditylang.org/)
- [Hardhat Docs](https://hardhat.org/docs)
- [Ethereum Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf)
