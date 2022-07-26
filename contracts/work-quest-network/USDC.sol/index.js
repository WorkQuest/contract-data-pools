const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQBridgeToken.json');

module.exports = {
  deploymentHeight: 1036236,
  address: '0xc2E305033Ca1FFA1488E3e9C52769b1156336196',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
