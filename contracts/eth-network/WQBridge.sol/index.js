const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQBridge.json');

module.exports = {
  deploymentHeight: 10326922,
  address: '0x03883AE9F07D71a1b67b89fD4af83B9A81e3f8C4',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile.abi);
  }
}
