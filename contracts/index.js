const questFactory = require('./work-quest-network/quest-factory/index');

module.exports = {
  Store: {
    ['WorkQuestDev']: {
      ['QuestFactory']: questFactory,
    }
  }
}
