
export enum Networks {
  Eth = "EthNetwork",
  Bnb = "BnbNetwork",
  WorkQuest = "WorkQuestNetwork",
  PolygonScan = "PolygonScan",
}

export enum WorkQuestNetworkContracts {
  QuestFactory = 'QuestFactory',
  WorkQuest = 'WorkQuest',
  Borrowing = 'Borrowing',
  WqtBridge ='WqtBridge',
  CollateralAuction = 'CollateralAuction',
  DAOVoting = 'DAOVoting',
  DebtAuction = 'DebtAuction',
  Lending = 'Lending',
  PensionFund = 'PensionFund',
  PriceOracle = 'PriceOracle',
  Promotion = 'Promotion',
  Referral = 'Referral',
  Router = 'Router',
  SavingProduct = 'SavingProduct',
  StakingWQT = 'StakingWQT',
  StakingWUSD = 'StakingWUSD',
  SurplusAuction = 'SurplusAuction',
  BNB = 'BNB',
  ETH = 'ETH',
  USDT = 'USDT',
  WUSD = 'WUSD',
}

export enum EthNetworkContracts {
  WqtWeth = 'WqtWeth',
  WqtBridge ='WqtBridge',
  BridgeUSDT = 'BridgeUSDT',
}

export enum BnbNetworkContracts {
  WqtWbnb = 'WqtWbnb',
  WqtBridge ='WqtBridge',
  BridgeUSDT = 'BridgeUSDT',
}

export enum PolygonScanContracts {
  BridgeUSDT = 'BridgeUSDT',
}

declare interface ContractData {
  address: string;
  deploymentHeight: number;
  getAbi(): object;
}

declare type ContractsStoreWorkQuestNetwork = {
  [Networks.WorkQuest]: { [key in WorkQuestNetworkContracts]: ContractData }
}

declare type ContractsStoreEthNetwork = {
  [Networks.Eth]: { [key in EthNetworkContracts]: ContractData }
}

declare type ContractsStoreBnbNetwork = {
  [Networks.Bnb]: { [key in BnbNetworkContracts]: ContractData }
}

declare module "@workquest/contract-data-pools" {
  export const Store: ContractsStoreWorkQuestNetwork | ContractsStoreEthNetwork | ContractsStoreBnbNetwork;
}
