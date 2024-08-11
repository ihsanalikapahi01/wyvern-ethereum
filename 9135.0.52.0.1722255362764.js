"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[9135],{69135:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__='import { BlockTag, FeeData, Provider, TransactionRequest, TransactionResponse } from "@ethersproject/abstract-provider";\nimport { BigNumber, BigNumberish } from "@ethersproject/bignumber";\nimport { Bytes, BytesLike } from "@ethersproject/bytes";\nimport { Deferrable } from "@ethersproject/properties";\nexport interface TypedDataDomain {\n    name?: string;\n    version?: string;\n    chainId?: BigNumberish;\n    verifyingContract?: string;\n    salt?: BytesLike;\n}\nexport interface TypedDataField {\n    name: string;\n    type: string;\n}\nexport interface ExternallyOwnedAccount {\n    readonly address: string;\n    readonly privateKey: string;\n}\nexport interface TypedDataSigner {\n    _signTypedData(domain: TypedDataDomain, types: Record<string, Array<TypedDataField>>, value: Record<string, any>): Promise<string>;\n}\nexport declare abstract class Signer {\n    readonly provider?: Provider;\n    abstract getAddress(): Promise<string>;\n    abstract signMessage(message: Bytes | string): Promise<string>;\n    abstract signTransaction(transaction: Deferrable<TransactionRequest>): Promise<string>;\n    abstract connect(provider: Provider): Signer;\n    readonly _isSigner: boolean;\n    constructor();\n    getBalance(blockTag?: BlockTag): Promise<BigNumber>;\n    getTransactionCount(blockTag?: BlockTag): Promise<number>;\n    estimateGas(transaction: Deferrable<TransactionRequest>): Promise<BigNumber>;\n    call(transaction: Deferrable<TransactionRequest>, blockTag?: BlockTag): Promise<string>;\n    sendTransaction(transaction: Deferrable<TransactionRequest>): Promise<TransactionResponse>;\n    getChainId(): Promise<number>;\n    getGasPrice(): Promise<BigNumber>;\n    getFeeData(): Promise<FeeData>;\n    resolveName(name: string): Promise<string>;\n    checkTransaction(transaction: Deferrable<TransactionRequest>): Deferrable<TransactionRequest>;\n    populateTransaction(transaction: Deferrable<TransactionRequest>): Promise<TransactionRequest>;\n    _checkProvider(operation?: string): void;\n    static isSigner(value: any): value is Signer;\n}\nexport declare class VoidSigner extends Signer implements TypedDataSigner {\n    readonly address: string;\n    constructor(address: string, provider?: Provider);\n    getAddress(): Promise<string>;\n    _fail(message: string, operation: string): Promise<any>;\n    signMessage(message: Bytes | string): Promise<string>;\n    signTransaction(transaction: Deferrable<TransactionRequest>): Promise<string>;\n    _signTypedData(domain: TypedDataDomain, types: Record<string, Array<TypedDataField>>, value: Record<string, any>): Promise<string>;\n    connect(provider: Provider): VoidSigner;\n}\n//# sourceMappingURL=index.d.ts.map'}}]);
//# sourceMappingURL=9135.0.52.0.1722255362764.js.map