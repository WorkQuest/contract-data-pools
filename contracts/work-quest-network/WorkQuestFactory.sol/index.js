const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WorkQuestFactory.json');

module.exports = {
  deploymentHeight: 30311,
  address: '0xD7B31905E3ff7dDAD0707dCEe6a3537587FD2ca4',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
