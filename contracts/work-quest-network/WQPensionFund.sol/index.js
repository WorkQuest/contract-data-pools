const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQPensionFund.json');

module.exports = {
  deploymentHeight: 1757485,
  address: '0x7f1e042682e1607766eEb72Ac3f370a5C2D5b9Bb',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
