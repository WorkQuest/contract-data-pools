const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WorkQuest.json');

module.exports = {
  deploymentHeight: 30311,
  address: '0x0000',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile);
  }
}
