const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WorkQuest.json');

module.exports = {
  deploymentHeight: 95718,
  address: '0x0000000000000000000000000000000000000000',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
