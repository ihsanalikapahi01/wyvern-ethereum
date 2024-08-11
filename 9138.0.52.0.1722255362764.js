"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[9138],{39138:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__="/*\nThis file is part of web3.js.\n\nweb3.js is free software: you can redistribute it and/or modify\nit under the terms of the GNU Lesser General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\n\nweb3.js is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU Lesser General Public License for more details.\n\nYou should have received a copy of the GNU Lesser General Public License\nalong with web3.js.  If not, see <http://www.gnu.org/licenses/>.\n*/\n/**\n * The web3-net package allows you to interact with an Ethereum node’s network properties.\n *\n * ```ts\n * import Net from 'web3-net';\n *\n * const net = new Net(Net.givenProvider || 'ws://some.local-or-remote.node:8546');\n * // or using the web3 umbrella package\n * import Web3 from 'web3';\n * const web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');\n *\n * // -> web3.eth.net\n *\n * // get the ID of the network\n * await web3.eth.net.getId();\n * > 5777n\n *\n * // get the peer count\n * await web3.eth.net.getPeerCount();\n * > 0n\n *\n * // Check if the node is listening for peers\n * await web3.eth.net.isListening();\n * > true\n * ```\n */\n/**\n *\n */\nimport { Net } from './net.js';\nexport * from './net.js';\nexport * from './rpc_method_wrappers.js';\nexport default Net;\n"}}]);
//# sourceMappingURL=9138.0.52.0.1722255362764.js.map