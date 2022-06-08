const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQBridge.json');

module.exports = {
  deploymentHeight: 11318329,
  address: '0x8E52341384F5286f4c76cE1072Aba887Be8E4EB9',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
