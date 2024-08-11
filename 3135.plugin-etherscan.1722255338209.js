"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3135],{

/***/ 33135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("// eslint-disable-next-line @typescript-eslint/no-var-requires\nconst snarkjs = require('snarkjs');\n\nconst logger = {\n  info: (...args) => console.log(...args),\n  debug: (...args) => console.log(...args)\n};\n\n(async () => {\n  try {\n    // @ts-ignore\n    await remix.call('circuit-compiler', 'generateR1cs', 'circuits/calculate_hash.circom');\n\n    const ptau_final = \"https://ipfs-cluster.ethdevops.io/ipfs/QmTiT4eiYz5KF7gQrDsgfCSTRv3wBPYJ4bRN1MmTRshpnW\";\n    // @ts-ignore\n    const r1csBuffer = await remix.call('fileManager', 'readFile', 'circuits/.bin/calculate_hash.r1cs', { encoding: null });\n    // @ts-ignore\n    const r1cs = new Uint8Array(r1csBuffer);\n    const zkey_0 = { type: \"mem\" };\n    const zkey_1 = { type: \"mem\" };\n    const zkey_final = { type: \"mem\" };\n\n    console.log('newZkey')\n    await snarkjs.zKey.newZKey(r1cs, ptau_final, zkey_0);\n\n    console.log('contribute')\n    await snarkjs.zKey.contribute(zkey_0, zkey_1, \"p2_C1\", \"pa_Entropy1\");\n\n    console.log('beacon')\n    await snarkjs.zKey.beacon(zkey_1, zkey_final, \"B3\", \"0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20\", 10);\n\n    console.log('verifyFromR1cs')\n    const verifyFromR1csResult = await snarkjs.zKey.verifyFromR1cs(r1cs, ptau_final, zkey_final);\n    console.assert(verifyFromR1csResult);\n\n    console.log('verifyFromInit')\n    const verifyFromInit = await snarkjs.zKey.verifyFromInit(zkey_0, ptau_final, zkey_final);\n    console.assert(verifyFromInit);\n\n    console.log('exportVerificationKey')\n    const vKey = await snarkjs.zKey.exportVerificationKey(zkey_final)\n    await remix.call('fileManager', 'writeFile', 'scripts/groth16/zk/keys/verification_key.json', JSON.stringify(vKey, null, 2))\n\n    console.log('save zkey_final')\n    await remix.call('fileManager', 'writeFile', 'scripts/groth16/zk/keys/zkey_final.txt', JSON.stringify(Array.from(((zkey_final as any).data))))\n\n    console.log('setup done.')\n\n  } catch (e) {\n    console.error(e.message)\n  }\n})()");

/***/ })

}]);
//# sourceMappingURL=3135.plugin-etherscan.1722255338209.js.map