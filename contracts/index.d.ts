
declare enum Network {
  Rinkeby = 'Rinkeby',
  WorkQuestDev = 'WorkQuestDev',
}

declare enum WorkQuestNetworkContracts {
  QuestFactory = 'QuestFactory',
}

declare interface ContractData {
  address: string;
  deploymentHeight: number;
  getAbi(): object;
}

export declare namespace ContractsStore {
    export const contracts: {
      [key in Network]: {
        [key in WorkQuestNetworkContracts]: ContractData;
    }
  }
}
