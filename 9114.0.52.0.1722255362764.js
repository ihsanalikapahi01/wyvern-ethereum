"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[9114],{49114:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__='// This script can be used to deploy the "Storage" contract using Web3 library.\n// Please make sure to compile "./contracts/1_Storage.sol" file before running this script.\n// And use Right click -> "Run" from context menu of the file to run the script. Shortcut: Ctrl+Shift+S\n\nimport { deploy } from \'./web3-lib\'\n\n(async () => {\n  try {\n    const result = await deploy(\'Storage\', [])\n    console.log(`address: ${result.address}`)\n  } catch (e) {\n    console.log(e.message)\n  }\n})()'}}]);
//# sourceMappingURL=9114.0.52.0.1722255362764.js.map