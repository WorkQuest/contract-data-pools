
export enum Networks {
  Eth = "EthNetwork",
  Bnb = "BnbNetwork",
  WorkQuest = "WorkQuestNetwork",
}

export enum WorkQuestNetworkContracts {
  QuestFactory = 'QuestFactory',
}

export enum EthNetworkContracts {

}

export enum BnbNetworkContracts {

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
