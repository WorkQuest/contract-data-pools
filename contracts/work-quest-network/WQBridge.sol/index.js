const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQBridge.json');

module.exports = {
  deploymentHeight: 17037,
  address: '0x19Bf5800c95c2cBdf990a050d645be00C1A2f48D',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
