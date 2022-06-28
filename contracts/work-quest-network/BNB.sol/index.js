const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQBridgeToken.json');

module.exports = {
  deploymentHeight: 60901,
  address: '0xD7ca5F803807b03D49606D4f8e66551170b1d689',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
