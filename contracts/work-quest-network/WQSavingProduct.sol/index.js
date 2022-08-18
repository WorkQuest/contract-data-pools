const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQSavingProduct.json');

module.exports = {
  deploymentHeight: 1757880,
  address: '0x2AD7E3fa3dDc8C5892B38C15996ED6A5f56d6054',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
