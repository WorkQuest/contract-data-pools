const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQPensionFund.json');

module.exports = {
  deploymentHeight: 0,
  address: '0x0000000000000000000000000000000000000000',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
