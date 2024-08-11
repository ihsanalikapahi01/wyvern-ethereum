"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[711],{

/***/ 60711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("pragma circom 2.0.0;\n\ninclude \"circomlib/circuits/poseidon.circom\";\ninclude \"./tree.circom\";\n\ntemplate CalculateSecret() {\n    signal input identityNullifier;\n    signal input identityTrapdoor;\n    signal output out;\n\n    component poseidon = Poseidon(2);\n\n    poseidon.inputs[0] <== identityNullifier;\n    poseidon.inputs[1] <== identityTrapdoor;\n\n    out <== poseidon.out;\n}\n\ntemplate CalculateIdentityCommitment() {\n    signal input secret;\n\n    signal output out;\n\n    component poseidon = Poseidon(1);\n\n    poseidon.inputs[0] <== secret;\n\n    out <== poseidon.out;\n}\n\ntemplate CalculateNullifierHash() {\n    signal input externalNullifier;\n    signal input identityNullifier;\n\n    signal output out;\n\n    component poseidon = Poseidon(2);\n\n    poseidon.inputs[0] <== externalNullifier;\n    poseidon.inputs[1] <== identityNullifier;\n\n    out <== poseidon.out;\n}\n\n// credits to : https://github.com/semaphore-protocol/semaphore\n// The current Semaphore smart contracts require nLevels <= 32 and nLevels >= 16.\ntemplate Semaphore(nLevels) {\n    signal input identityNullifier;\n    signal input identityTrapdoor;\n    signal input treePathIndices[nLevels];\n    signal input treeSiblings[nLevels];\n\n    signal input signalHash;\n    signal input externalNullifier;\n\n    signal output root;\n    signal output nullifierHash;\n\n    component calculateSecret = CalculateSecret();\n    calculateSecret.identityNullifier <== identityNullifier;\n    calculateSecret.identityTrapdoor <== identityTrapdoor;\n\n    signal secret;\n    secret <== calculateSecret.out;\n\n    component calculateIdentityCommitment = CalculateIdentityCommitment();\n    calculateIdentityCommitment.secret <== secret;\n\n    component calculateNullifierHash = CalculateNullifierHash();\n    calculateNullifierHash.externalNullifier <== externalNullifier;\n    calculateNullifierHash.identityNullifier <== identityNullifier;\n\n    component inclusionProof = MerkleTreeInclusionProof(nLevels);\n    inclusionProof.leaf <== calculateIdentityCommitment.out;\n\n    for (var i = 0; i < nLevels; i++) {\n        inclusionProof.siblings[i] <== treeSiblings[i];\n        inclusionProof.pathIndices[i] <== treePathIndices[i];\n    }\n\n    root <== inclusionProof.root;\n\n    // Dummy square to prevent tampering signalHash.\n    signal signalHashSquared;\n    signalHashSquared <== signalHash * signalHash;\n\n    nullifierHash <== calculateNullifierHash.out;\n}\n\ncomponent main {public [signalHash, externalNullifier]} = Semaphore(20);");

/***/ })

}]);
//# sourceMappingURL=711.plugin-etherscan.1722255338209.js.map