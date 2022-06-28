const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQBridgeToken.json');

module.exports = {
  deploymentHeight: 60907,
  address: '0xD93d2cF0e0179112469188F61ceb948F2Dbe4824',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
