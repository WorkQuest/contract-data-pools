const questFactory = require('./work-quest-network/quest-factory/index');

const Network = {
  Rinkeby: 'Rinkeby',
  WorkQuestDev: 'WorkQuestDev',
}

const WorkQuestNetworkContract = {
  QuestFactory: 'QuestFactory',
}

const RinkebyContract = {

}

module.exports = {
  Network,
  RinkebyContract,
  WorkQuestNetworkContract,
  Store: {
    ['WorkQuestDev']: {
      ['QuestFactory']: questFactory,
    }
  }
}
