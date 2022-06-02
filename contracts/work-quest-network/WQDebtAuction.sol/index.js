const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQDebtAuction.json');

module.exports = {
  deploymentHeight: 32963,
  address: '0x776B15eD27038D4E45c395d8A8d34d8Cf0B012aF',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile.abi);
  }
}
