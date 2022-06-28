const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQBridge.json');

module.exports = {
  deploymentHeight: 60950,
  address: '0x5C458F00974b0195817c40aE7A80f6fe38843eDb',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
