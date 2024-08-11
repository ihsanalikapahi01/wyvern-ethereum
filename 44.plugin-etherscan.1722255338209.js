"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[44],{

/***/ 10044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import Web3 from 'web3'\nimport { Contract, ContractSendMethod, Options } from 'web3-eth-contract'\n\n/**\n * Deploy the given contract\n * @param {string} contractName name of the contract to deploy\n * @param {Array<any>} args list of constructor' parameters\n * @param {string} from account used to send the transaction\n * @param {number} gas gas limit\n * @return {Options} deployed contract\n */\nexport const deploy = async (contractName: string, args: Array<any>, from?: string, gas?: number): Promise<Options> => {\n\n  const web3 = new Web3(web3Provider)\n  console.log(`deploying ${contractName}`)\n  // Note that the script needs the ABI which is generated from the compilation artifact.\n  // Make sure contract is compiled and artifacts are generated\n  const artifactsPath = `browser/contracts/artifacts/${contractName}.json`\n\n  const metadata = JSON.parse(await remix.call('fileManager', 'getFile', artifactsPath))\n\n  const accounts = await web3.eth.getAccounts()\n\n  const contract: Contract = new web3.eth.Contract(metadata.abi)\n\n  const contractSend: ContractSendMethod = contract.deploy({\n    data: metadata.data.bytecode.object,\n    arguments: args\n  })\n\n  const newContractInstance = await contractSend.send({\n    from: from || accounts[0],\n    gas: gas || 1500000\n  })\n  return newContractInstance.options\n}");

/***/ })

}]);
//# sourceMappingURL=44.plugin-etherscan.1722255338209.js.map