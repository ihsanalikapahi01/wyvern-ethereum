"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6131],{

/***/ 76131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("// eslint-disable-next-line @typescript-eslint/no-var-requires\nconst snarkjs = require('snarkjs');\n\n(async () => {\n  try {\n    // @ts-ignore\n    await remix.call('circuit-compiler', 'generateR1cs', 'circuits/rln.circom');\n\n    const ptau_final = \"https://ipfs-cluster.ethdevops.io/ipfs/QmciCq5JcZQyTLvC9GRanrLBi82ZmSriq1Fr5zANkGHebf\";\n    // @ts-ignore\n    const r1csBuffer = await remix.call('fileManager', 'readFile', 'circuits/.bin/rln.r1cs', { encoding: null });\n    // @ts-ignore\n    const r1cs = new Uint8Array(r1csBuffer);\n    const zkey_final = { type: \"mem\" };\n\n    console.log('plonk setup')\n    await snarkjs.plonk.setup(r1cs, ptau_final, zkey_final)\n\n    console.log('exportVerificationKey')\n    const vKey = await snarkjs.zKey.exportVerificationKey(zkey_final)\n\n    console.log('save zkey_final')\n    // @ts-ignore\n    await remix.call('fileManager', 'writeFile', 'scripts/plonk/zk/keys/zkey_final.txt', (zkey_final as any).data, { encoding: null })\n\n    console.log('save verification key')\n    await remix.call('fileManager', 'writeFile', 'scripts/plonk/zk/keys/verification_key.json', JSON.stringify(vKey, null, 2))\n\n    console.log('setup done')\n  } catch (e) {\n    console.error(e.message)\n  }\n})()");

/***/ })

}]);
//# sourceMappingURL=6131.plugin-etherscan.1722255338209.js.map