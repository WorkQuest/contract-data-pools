const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WorkQuestFactory.json');

module.exports = {
  deploymentHeight: 1757461,
  address: '0x23036AAb4EAc7fCB6b952200341089188cd347Ee',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
