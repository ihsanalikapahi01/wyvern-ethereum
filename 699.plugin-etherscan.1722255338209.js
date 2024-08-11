"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[699],{

/***/ 10699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import { ethers } from 'ethers'\n\n/**\n * Deploy the given contract\n * @param {string} contractName name of the contract to deploy\n * @param {Array<any>} args list of constructor' parameters\n * @param {Number} accountIndex account index from the exposed account\n * @return {Contract} deployed contract\n */\nexport const deploy = async (contractName: string, args: Array<any>, accountIndex?: number): Promise<ethers.Contract> => {\n\n  console.log(`deploying ${contractName}`)\n  // Note that the script needs the ABI which is generated from the compilation artifact.\n  // Make sure contract is compiled and artifacts are generated\n  const artifactsPath = `browser/contracts/artifacts/${contractName}.json` // Change this for different path\n\n  const metadata = JSON.parse(await remix.call('fileManager', 'getFile', artifactsPath))\n  // 'web3Provider' is a remix global variable object\n\n  const signer = (new ethers.providers.Web3Provider(web3Provider)).getSigner(accountIndex)\n\n  const factory = new ethers.ContractFactory(metadata.abi, metadata.data.bytecode.object, signer)\n\n  const contract = await factory.deploy(...args)\n\n  // The contract is NOT deployed yet; we must wait until it is mined\n  await contract.deployed()\n  return contract\n}");

/***/ })

}]);
//# sourceMappingURL=699.plugin-etherscan.1722255338209.js.map