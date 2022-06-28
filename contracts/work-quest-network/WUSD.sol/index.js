const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQBridgeToken.json');

module.exports = {
  deploymentHeight: 402,
  address: '0x4d9F307F1fa63abC943b5db2CBa1c71D02d86AAa',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
