const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQSurplusAuction.json');

module.exports = {
  deploymentHeight: 31599,
  address: '0xAdf5eC71b97CC2c3Aa19ef31879F2BE0ccf834d7',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
