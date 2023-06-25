const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQBridge.json');

module.exports = {
    deploymentHeight: 5948880,
    address: '0x7BC85cbDc5533d2047b6BB22E2BAfFab1c6cA188',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
