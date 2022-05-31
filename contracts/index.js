/** WorkQuest Network imports */
const questFactory = require('./work-quest-network/WorkQuestFactory.sol/index');
const workQuest = require('./work-quest-network/WorkQuest.sol/index');
const borrowing = require('./work-quest-network/WQBorrowing.sol/index');
const bridge = require('./work-quest-network/WQBridge.sol/index');
const collateralAuction = require('./work-quest-network/WQCollateralAuction.sol/index');
const daoVoting = require('./work-quest-network/WQDAOVoting.sol/index');
const debtAuction = require('./work-quest-network/WQDebtAuction.sol/index');
const lending = require('./work-quest-network/WQLending.sol/index');
const pensionFund = require('./work-quest-network/WQPensionFund.sol/index');
const priceOracle = require('./work-quest-network/WQPriceOracle.sol/index');
const promotion = require('./work-quest-network/WQPromotion.sol/index');
const referral = require('./work-quest-network/WQReferral.sol/index');
const router = require('./work-quest-network/WQRouter.sol/index');
const savingProduct = require('./work-quest-network/WQSavingProduct.sol/index');
const stakingWQT = require('./work-quest-network/WQStakingWQT.sol/index');
const stakingWUSD = require('./work-quest-network/WQStakingWUSD.sol/index');
const surplusAuction = require('./work-quest-network/WQSurplusAuction.sol/index');

/** Eth Network imports */
const wqtWeth = require('./eth-network/WqtWeth.sol/index');
const bridgeUSDTOnBnb = require('./bnb-network/WQBridgeStable.sol/index');

/** Bnb Network imports */
const wqtWbnb = require('./bnb-network/WqtWbnb.sol/index');
const bridgeUSDTOnEth = require('./eth-network/WQBridgeStable.sol/index');

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
  Bridge: 'Bridge',
  CollateralAuction: 'CollateralAuction',
  DAOVoting: 'DAOVoting',
  DebtAuction: 'DebtAuction',
  Lending: 'Lending',
  PensionFund: 'PensionFund',
  PriceOracle: 'PriceOracle',
  Promotion: 'Promotion',
  Referral: 'Referral',
  Router: 'Router',
  SavingProduct: 'SavingProduct',
  StakingWQT: 'StakingWQT',
  StakingWUSD: 'StakingWUSD',
  SurplusAuction: 'SurplusAuction'
};

const EthNetworkContracts = {
  WqtWeth: 'WqtWeth',
}

const BnbNetworkContracts = {
  WqtWbnb: 'WqtWbnb',
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
      ['Bridge']: bridge,
      ['CollateralAuction']: collateralAuction,
      ['DAOVoting']: daoVoting,
      ['DebtAuction']: debtAuction,
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
    },
    ['EthNetwork']: {
      ['WqtWeth']: wqtWeth,
      ['BridgeUSDT']: bridgeUSDTOnEth,
    },
    ['BnbNetwork']: {
      ['WqtWbnb']: wqtWbnb,
      ['BridgeUSDT']: bridgeUSDTOnBnb,
    },
    ['PolygonScan']: {
      ['WqtWbnb']: bridgeUSDTOnPolygonScan,
    }
  }
}
