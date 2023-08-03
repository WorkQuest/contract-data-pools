const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQReferral.json');

module.exports = {
  deploymentHeight: 95363,
  address: '0x9618E57fe0a3b3A79723CaC7c6AEF330C3Df515E',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
