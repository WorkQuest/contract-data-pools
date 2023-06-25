const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQBridge.json');

module.exports = {
    deploymentHeight: 29377205,
    address: '0x22A5C5d31DF6dBf34e6dc332FD52a2C2B991627B',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
