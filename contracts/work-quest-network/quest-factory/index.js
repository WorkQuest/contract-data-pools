const fs = require('fs');

export default {
  deploymentHeight: 200,
  address: '0x0000',
  getAbi() {
    const abiFile = fs.readFileSync('./abi/QuestFactory.json').toString();

    return JSON.parse(abiFile);
  }
}
