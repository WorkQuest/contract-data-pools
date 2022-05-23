
export declare enum Network {
  Rinkeby = 'Rinkeby',
  WorkQuestDev = 'WorkQuestDev',
}

export declare enum WorkQuestNetworkContracts {
  QuestFactory = 'QuestFactory',
}

export declare enum RinkebyContracts {

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
}
