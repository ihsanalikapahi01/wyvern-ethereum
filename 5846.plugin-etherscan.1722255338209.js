"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5846],{

/***/ 5846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import { deploy } from './ethers-lib'\n\n(async () => {\n  try {\n    const result = await deploy('SampleERC20', [\"TestToken\", \"TST\", 18, 1000])\n    console.log(`address: ${result.address}`)\n  } catch (e) {\n    console.log(e.message)\n  }\n})()");

/***/ })

}]);
//# sourceMappingURL=5846.plugin-etherscan.1722255338209.js.map