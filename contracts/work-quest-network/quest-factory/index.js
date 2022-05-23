const fs = require('fs');

module.exports = {
  deploymentHeight: 200,
  address: '0x0000',
  getAbi() {
    const abiFile = fs.readFileSync('./abi/QuestFactory.json').toString();

    return JSON.parse(abiFile);
  }
}
