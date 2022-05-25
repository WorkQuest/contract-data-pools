const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQSavingProduct.json');

module.exports = {
  deploymentHeight: 30660,
  address: '0xaFbadED10D19032f4Df676002DB0956F2FBE6437',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile);
  }
}
