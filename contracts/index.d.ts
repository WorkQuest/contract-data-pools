
declare enum Network {
  Rinkeby = 'Rinkeby',
  WorkQuestDev = 'WorkQuestDev',
}

declare enum WorkQuestNetworkContract {
  QuestFactory = 'QuestFactory',
}

declare enum RinkebyContract {

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

  export const Network: Network;

  export const RinkebyContract: RinkebyContract;
  export const WorkQuestNetworkContract: WorkQuestNetworkContract;
}
