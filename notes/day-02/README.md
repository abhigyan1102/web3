# Day 02 – Mappings, Structs, and Arrays

## Topics Covered

- Solidity `struct` for grouping related data
- `mapping` for key-value storage
- Dynamic arrays (`uint256[]`)
- Writing and reading structured data on-chain
- Access control based on ownership of records

## Key Concepts

### Structs
Group multiple variables under one type.

```solidity
struct Item {
    uint256 id;
    string name;
    uint256 value;
    address owner;
}
```

### Mappings
Hash maps built into Solidity. Keys are not enumerable by default.

```solidity
mapping(uint256 => Item) public items;
```

### Arrays
Dynamic arrays grow as items are added.

```solidity
uint256[] public itemIds;
itemIds.push(id);
```

### Auto-incrementing IDs
A common pattern for unique IDs:

```solidity
uint256 private nextId = 1;
uint256 id = nextId++;
```

## Contract: SimpleStorage.sol

See [`contracts/SimpleStorage.sol`](../../contracts/SimpleStorage.sol)

## Resources

- [Solidity Data Locations](https://docs.soliditylang.org/en/latest/types.html#data-location)
- [Mappings](https://docs.soliditylang.org/en/latest/types.html#mapping-types)
