const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQPriceOracle.json');

module.exports = {
  deploymentHeight: 95279,
  address: '0x120181418cF8E658D7036EF7cA450B73c8Df7CB9',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
