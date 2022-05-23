
export enum WorkQuestNetworkContracts {
  QuestFactory = 'QuestFactory',
}

export enum EthContracts {

}

export enum BnbContracts {

}

declare interface ContractData {
  address: string;
  deploymentHeight: number;
  getAbi(): object;
}

declare type ContractsStoreWorkQuestNetwork = {
  "WorkQuestNetwork": { [key in WorkQuestNetworkContracts]: ContractData }
}

declare type ContractsStoreEthNetwork = {
  "EthNetwork": { [key in EthContracts]: ContractData }
}

declare type ContractsStoreBnbNetwork = {
  "BnbNetwork": { [key in BnbContracts]: ContractData }
}

declare module "@workquest/contract-data-pools" {
  export const Store: ContractsStoreWorkQuestNetwork | ContractsStoreEthNetwork | ContractsStoreBnbNetwork;
}
