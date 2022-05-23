
declare enum Network {
  WorkNet = 'WorkNet',
  Rinkeby = 'Rinkeby',
}

declare interface Contract {
  address: string;
  deploymentHeight: number;
  getAbi(): object;
}

declare type ContractNetworks = {
  [key in Network]: object;
};

export declare namespace Contracts {
   export const contracts: ContractNetworks;
}
