"use strict";
import { BaseContract, Contract, ContractFactory } from "@saiakhil2012/contracts";
import { BigNumber, FixedNumber } from "@ethersproject/bignumber";
import { Signer, VoidSigner } from "@ethersproject/abstract-signer";
import { Wallet } from "@ethersproject/wallet";
import * as constants from "@ethersproject/constants";
import * as providers from "@saiakhil2012/providers";
import { getDefaultProvider } from "@saiakhil2012/providers";
import { Wordlist, wordlists } from "@ethersproject/wordlists";
import * as utils from "./utils";
import { ErrorCode as errors, Logger } from "@saiakhil2012/logger";
////////////////////////
// Compile-Time Constants
// This is generated by "npm run dist"
import { version } from "./_version";
const logger = new Logger(version);
////////////////////////
// Exports
export { Signer, Wallet, VoidSigner, getDefaultProvider, providers, BaseContract, Contract, ContractFactory, BigNumber, FixedNumber, constants, errors, logger, utils, wordlists, 
////////////////////////
// Compile-Time Constants
version, Wordlist };
//# sourceMappingURL=ethers.js.map