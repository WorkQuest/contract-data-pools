const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WorkQuest.json');

module.exports = {
  deploymentHeight: 1757461,
  address: '0x0000',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
