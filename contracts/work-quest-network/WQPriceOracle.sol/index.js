const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQPriceOracle.json');

module.exports = {
  deploymentHeight: 29445,
  address: '0x060782d7A45B95C5a07696542CBd81Ad70D518F0',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
