// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

contract messageStore {
    string Message;

    function setMessage (string calldata message) public {
        Message = message;
    }

    function getMessage () public view returns (bytes32) {
        return keccak256(abi.encodePacked(Message));
    }
}