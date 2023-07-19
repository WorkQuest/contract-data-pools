const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQReferral.json');

module.exports = {
  deploymentHeight: 30275,
  address: '0x630C6Ec460E8252549E8483ee9aDA8923754dFD3',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
