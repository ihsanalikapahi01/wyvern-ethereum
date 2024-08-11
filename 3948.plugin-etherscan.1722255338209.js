"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3948],{

/***/ 83948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("name: Running Solidity Unit Tests\non: [push]\n\njobs:\n  run_sol_contracts_job:\n    runs-on: ubuntu-latest\n    name: A job to run solidity unit tests on github actions CI\n    steps:\n    - name: Checkout\n      uses: actions/checkout@v2\n    - name: Environment Setup\n      uses: actions/setup-node@v3\n      with:\n        node-version: 20.0.0\n    - name: Run SUT Action\n      uses: EthereumRemix/sol-test@v1.1\n      with:\n        test-path: 'tests'\n        compiler-version: '0.8.15'\n//      evm-version: 'paris'\n//      optimize: true\n//      optimizer-runs: 200\n//      node-url: 'https://mainnet.infura.io/v3/08b2a484451e4635a28b3d8234f24332'\n//      block-number: 'latest'\n//      hard-fork: 'merge'");

/***/ })

}]);
//# sourceMappingURL=3948.plugin-etherscan.1722255338209.js.map