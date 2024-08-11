"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[8805],{18805:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__="// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\n// credits to https://solidity-by-example.org/app/create2/\n\ncontract Create2Factory {\n    // Returns the address of the newly deployed contract\n    function deploy(address _owner, uint256 _foo, bytes32 _salt)\n        public\n        payable\n        returns (address)\n    {\n        // This syntax is a newer way to invoke create2 without assembly, you just need to pass salt\n        // https://docs.soliditylang.org/en/latest/control-structures.html#salted-contract-creations-create2\n        return address(new TestContract{salt: _salt}(_owner, _foo));\n    }\n}\n\n// This is the older way of doing it using assembly\ncontract Create2FactoryAssembly {\n    event Deployed(address addr, uint256 salt);\n\n    // 1. Get bytecode of contract to be deployed\n    // NOTE: _owner and _foo are arguments of the TestContract's constructor\n    function getBytecode(address _owner, uint256 _foo)\n        public\n        pure\n        returns (bytes memory)\n    {\n        bytes memory bytecode = type(TestContract).creationCode;\n\n        return abi.encodePacked(bytecode, abi.encode(_owner, _foo));\n    }\n\n    // 2. Compute the address of the contract to be deployed\n    // NOTE: _salt is a random number used to create an address\n    function getAddress(bytes memory bytecode, uint256 _salt)\n        public\n        view\n        returns (address)\n    {\n        bytes32 hash = keccak256(\n            abi.encodePacked(\n                bytes1(0xff), address(this), _salt, keccak256(bytecode)\n            )\n        );\n\n        // NOTE: cast last 20 bytes of hash to address\n        return address(uint160(uint256(hash)));\n    }\n\n    // 3. Deploy the contract\n    // NOTE:\n    // Check the event log Deployed which contains the address of the deployed TestContract.\n    // The address in the log should equal the address computed from above.\n    function deploy(bytes memory bytecode, uint256 _salt) public payable {\n        address addr;\n\n        /*\n        NOTE: How to call create2\n\n        create2(v, p, n, s)\n        create new contract with code at memory p to p + n\n        and send v wei\n        and return the new address\n        where new address = first 20 bytes of keccak256(0xff + address(this) + s + keccak256(mem[pâ¦(p+n)))\n              s = big-endian 256-bit value\n        */\n        assembly {\n            addr :=\n                create2(\n                    callvalue(), // wei sent with current call\n                    // Actual code starts after skipping the first 32 bytes\n                    add(bytecode, 0x20),\n                    mload(bytecode), // Load the size of code contained in the first 32 bytes\n                    _salt // Salt from function arguments\n                )\n\n            if iszero(extcodesize(addr)) { revert(0, 0) }\n        }\n\n        emit Deployed(addr, _salt);\n    }\n}\n\ncontract TestContract {\n    address public owner;\n    uint256 public foo;\n\n    constructor(address _owner, uint256 _foo) payable {\n        owner = _owner;\n        foo = _foo;\n    }\n\n    function getBalance() public view returns (uint256) {\n        return address(this).balance;\n    }\n}\n"}}]);
//# sourceMappingURL=8805.0.52.0.1722255362764.js.map