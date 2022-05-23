
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

declare type ContractNetworks = {
  [key in Network]: {
    [key in WorkQuestNetworkContracts]: ContractData;
  }
};

export declare namespace Contracts {
   export const contracts: ContractNetworks;
}
