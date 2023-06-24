const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQBridge.json');

module.exports = {
    deploymentHeight: 17549121,
    address: '0xAbC5E2D6CEdbF0Fa1C14D9682a802E94e41c785F',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
