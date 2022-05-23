
export enum Network {
  Rinkeby = 'Rinkeby',
  WorkQuestDev = 'WorkQuestDev',
}

export enum WorkQuestNetworkContract {
  QuestFactory = 'QuestFactory',
}

export enum RinkebyContract {

}

declare interface ContractData {
  address: string;
  deploymentHeight: number;
  getAbi(): object;
}

declare type ContractsStoreType = {
  [key in Network]: {
    [key in WorkQuestNetworkContract | RinkebyContract]: ContractData;
  }
}

declare module "@workquest/contract-data-pools" {
  export const Store: ContractsStoreType;
}
