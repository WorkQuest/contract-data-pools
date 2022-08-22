/** WorkQuest Network imports */
const questFactory = require('./work-quest-network/WorkQuestFactory.sol/index');
const workQuest = require('./work-quest-network/WorkQuest.sol/index');
const borrowing = require('./work-quest-network/WQBorrowing.sol/index');
const wqtBridgeOnWorkNet = require('./work-quest-network/WQBridge.sol/index');
const daoVoting = require('./work-quest-network/WQDAOVoting.sol/index');
const lending = require('./work-quest-network/WQLending.sol/index');
const pensionFund = require('./work-quest-network/WQPensionFund.sol/index');
const priceOracle = require('./work-quest-network/WQPriceOracle.sol/index');
const promotion = require('./work-quest-network/WQPromotion.sol/index');
const referral = require('./work-quest-network/WQReferral.sol/index');
const router = require('./work-quest-network/WQRouter.sol/index');
const savingProduct = require('./work-quest-network/WQSavingProduct.sol/index');
const stakingWQT = require('./work-quest-network/WQStakingWQT.sol/index');
const stakingWUSD = require('./work-quest-network/WQStakingWUSD.sol/index');
const BNB = require('./work-quest-network/BNB.sol/index');
const ETH = require('./work-quest-network/ETH.sol/index');
const USDT = require('./work-quest-network/USDT.sol/index');
const USDC = require('./work-quest-network/USDC.sol/index');
const WUSD = require('./work-quest-network/WUSD.sol/index');
const BNBAuction = require('./work-quest-network/BNBAuction.sol/index');
const ETHAuction = require('./work-quest-network/ETHAuction.sol/index');
const USDTAuction = require('./work-quest-network/USDTAuction.sol/index');
const USDCAuction = require('./work-quest-network/USDCAuction.sol/index');

/** Eth Network imports */
const wqtWeth = require('./eth-network/WqtWeth.sol/index');
const bridgeUSDTOnEth = require('./eth-network/WQBridgeStable.sol/index');
const wqtBridgeOnWorkEth = require('./eth-network/WQBridge.sol/index');

/** Bnb Network imports */
const wqtWbnb = require('./bnb-network/WqtWbnb.sol/index');
const wqtBridgeOnWorkBnb = require('./bnb-network/WQBridge.sol/index');
const bridgeUSDTOnBnb = require('./bnb-network/WQBridgeStable.sol/index');

/** PolygonScan imports */
const bridgeUSDTOnPolygonScan = require('./polygon-scan-network/WQBridgeStable.sol/index');

const Networks = {
  Eth: "EthNetwork",
  Bnb: "BnbNetwork",
  PolygonScan: "PolygonScan",
  WorkQuest: "WorkQuestNetwork",
}

const WorkQuestNetworkContracts = {
  QuestFactory: 'QuestFactory',
  WorkQuest: 'WorkQuest',
  Borrowing: 'Borrowing',
  WqtBridge: 'WqtBridge',
  DAOVoting: 'DAOVoting',
  Lending: 'Lending',
  PensionFund: 'PensionFund',
  PriceOracle: 'PriceOracle',
  Promotion: 'Promotion',
  Referral: 'Referral',
  Router: 'Router',
  SavingProduct: 'SavingProduct',
  StakingWQT: 'StakingWQT',
  StakingWUSD: 'StakingWUSD',
  SurplusAuction: 'SurplusAuction',
  BNB: 'BNB',
  ETH: 'ETH',
  USDT: 'USDT',
  USDC: 'USDC',
  WUSD: 'WUSD',
  BNBAuction: 'BNBAuction',
  ETHAuction: 'ETHAuction',
  USDTAuction: 'USDTAuction',
  USDCAuction: 'USDCAuction'
};

const EthNetworkContracts = {
  WqtWeth: 'WqtWeth',
  WqtBridge: 'WqtBridge',
  BridgeUSDT: 'BridgeUSDT',
}

const BnbNetworkContracts = {
  WqtWbnb: 'WqtWbnb',
  WqtBridge: 'WqtBridge',
  BridgeUSDT: 'BridgeUSDT',
}

const PolygonScanContracts = {
  BridgeUSDT: 'BridgeUSDT',
}

module.exports = {
  Networks,
  EthNetworkContracts,
  BnbNetworkContracts,
  PolygonScanContracts,
  WorkQuestNetworkContracts,
  Store: {
    ['WorkQuestNetwork']: {
      ['WorkQuest']: workQuest,
      ['QuestFactory']: questFactory,
      ['Borrowing']: borrowing,
      ['WqtBridge']: wqtBridgeOnWorkNet,
      ['DAOVoting']: daoVoting,
      ['Lending']: lending,
      ['PensionFund']: pensionFund,
      ['PriceOracle']: priceOracle,
      ['Promotion']: promotion,
      ['Referral']: referral,
      ['Router']: router,
      ['SavingProduct']: savingProduct,
      ['StakingWQT']: stakingWQT,
      ['StakingWUSD']: stakingWUSD,
      ['SurplusAuction']: surplusAuction,
      ['BNB']: BNB,
      ['ETH']: ETH,
      ['USDT']: USDT,
      ['USDC']: USDC,
      ['WUSD']: WUSD,
      ['BNBAuction']: BNBAuction,
      ['ETHAuction']: ETHAuction,
      ['USDTAuction']: USDTAuction,
      ['USDCAuction']: USDCAuction
    },
    ['EthNetwork']: {
      ['WqtWeth']: wqtWeth,
      ['BridgeUSDT']: bridgeUSDTOnEth,
      ['WqtBridge']: wqtBridgeOnWorkEth,
    },
    ['BnbNetwork']: {
      ['WqtWbnb']: wqtWbnb,
      ['BridgeUSDT']: bridgeUSDTOnBnb,
      ['WqtBridge']: wqtBridgeOnWorkBnb,
    },
    ['PolygonScan']: {
      ['BridgeUSDT']: bridgeUSDTOnPolygonScan,
    }
  }
}
