const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQLending.json');

module.exports = {
  deploymentHeight: 30542,
  address: '0xEB604754C4A7cd0771278aC0c335739187Ca4900',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile);
  }
}
