const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQSurplusAuction.json');

module.exports = {
  deploymentHeight: 965049,
  address: '0x6d4D945FbcF5bc492Db62eeADaB4AB95e754fE2d',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
