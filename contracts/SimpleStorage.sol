// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

/**
 * @title SimpleStorage
 * @dev Day 2: Demonstrates mappings, structs, arrays, and events.
 */
contract SimpleStorage {
    struct Item {
        uint256 id;
        string name;
        uint256 value;
        address owner;
    }

    uint256 private nextId = 1;
    mapping(uint256 => Item) public items;
    uint256[] public itemIds;

    event ItemAdded(uint256 indexed id, string name, uint256 value, address owner);
    event ItemUpdated(uint256 indexed id, string name, uint256 value);

    function addItem(string memory _name, uint256 _value) public returns (uint256) {
        uint256 id = nextId++;
        items[id] = Item(id, _name, _value, msg.sender);
        itemIds.push(id);
        emit ItemAdded(id, _name, _value, msg.sender);
        return id;
    }

    function updateItem(uint256 _id, string memory _name, uint256 _value) public {
        require(items[_id].owner == msg.sender, "Only item owner can update");
        require(items[_id].id != 0, "Item does not exist");
        items[_id].name = _name;
        items[_id].value = _value;
        emit ItemUpdated(_id, _name, _value);
    }

    function getItem(uint256 _id) public view returns (Item memory) {
        require(items[_id].id != 0, "Item does not exist");
        return items[_id];
    }

    function getItemCount() public view returns (uint256) {
        return itemIds.length;
    }
}
