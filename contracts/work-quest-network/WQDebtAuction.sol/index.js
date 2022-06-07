const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQDebtAuction.json');

module.exports = {
  deploymentHeight: 31593,
  address: '0x1d1952c1C155BD5b565d1ED7a62927075977ba6B',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
