const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQSavingProduct.json');

module.exports = {
  deploymentHeight: 1430552,
  address: '0x07d27E0662201Dc5D91eFDCa943a68Bc5B5377Ec',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
