const questFactory = require('./work-quest-network/quest-factory/index');

const WorkQuestNetworkContracts = {
  QuestFactory: 'QuestFactory',
}

const EthContracts = {

}

const BnbContracts = {

}

module.exports = {
  EthContracts,
  BnbContracts,
  WorkQuestNetworkContracts,
  Store: {
    ['WorkQuestNetwork']: {
      ['QuestFactory']: questFactory,
    }
  }
}
