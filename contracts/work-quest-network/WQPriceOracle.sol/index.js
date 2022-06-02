const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQPriceOracle.json');

module.exports = {
  deploymentHeight: 13000,
  address: '0x087925f8d239435212deeB090EBA074bcCAF0D4C',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile.abi);
  }
}
