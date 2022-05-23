
declare enum Network {
  Rinkeby = 'Rinkeby',
  WorkQuestDev = 'WorkQuestDev',
}

declare enum WorkQuestNetworkContracts {
  QuestFactory = 'QuestFactory',
}

declare enum RinkebyContracts {

}

export declare interface ContractData {
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
  export const store: ContractsStoreType;
  export const ContractData;

  export const RinkebyContracts;
  export const WorkQuestNetworkContracts;
}
