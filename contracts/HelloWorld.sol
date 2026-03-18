// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

/**
 * @title HelloWorld
 * @dev Day 1: First Solidity smart contract
 *      Demonstrates state variables, constructor, and basic functions.
 */
contract HelloWorld {
    string public message;
    address public owner;

    event MessageUpdated(string oldMessage, string newMessage, address updatedBy);

    constructor(string memory _message) {
        message = _message;
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function updateMessage(string memory _newMessage) public onlyOwner {
        emit MessageUpdated(message, _newMessage, msg.sender);
        message = _newMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
