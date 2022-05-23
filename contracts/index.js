const questFactory = require('./work-quest-network/quest-factory/index');

const Networks = {
  Eth: "EthNetwork",
  Bnb: "BnbNetwork",
  WorkQuest: "WorkQuestNetwork",
}

const WorkQuestNetworkContracts = {
  QuestFactory: 'QuestFactory',
}

const EthNetworkContracts = {

}

const BnbNetworkContracts = {

}

module.exports = {
  Networks,
  EthNetworkContracts,
  BnbNetworkContracts,
  WorkQuestNetworkContracts,
  Store: {
    ['WorkQuestNetwork']: {
      ['QuestFactory']: questFactory,
    }
  }
}
