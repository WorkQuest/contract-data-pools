
declare enum Network {
  Rinkeby = 'Rinkeby',
  WorkQuestDev = 'WorkQuestDev',
}

declare enum WorkQuestNetworkContracts {
  QuestFactory = 'QuestFactory',
}

declare enum RinkebyContracts {

}

declare interface ContractData {
  address: string;
  deploymentHeight: number;
  getAbi(): object;
}

declare type ContractsStore = {
  [key in Network]: {
    [key in WorkQuestNetworkContracts | RinkebyContracts]: ContractData;
  }
}

export default ContractsStore;
