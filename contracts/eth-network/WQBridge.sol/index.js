const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQBridge.json');

module.exports = {
  deploymentHeight: 13316187,
  address: '0xd65815dA812C6eAEC0186215E43A12D76F5deCBc',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
