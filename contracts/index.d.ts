
export enum Network {
  Rinkeby = 'Rinkeby',
  WorkQuestDev = 'WorkQuestDev',
}

export enum WorkQuestNetworkContracts {
  QuestFactory = 'QuestFactory',
}

export enum RinkebyContracts {

}

declare interface ContractData {
  address: string;
  deploymentHeight: number;
  getAbi(): object;
}

declare type ContractsStoreType = {
  [key in Network]: {
    [key in WorkQuestNetworkContracts | RinkebyContracts]: ContractData;
  }
}

declare module "@workquest/contract-data-pools" {
  export const Store: ContractsStoreType;
}
