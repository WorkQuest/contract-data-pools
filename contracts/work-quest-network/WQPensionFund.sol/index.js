const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQPensionFund.json');

module.exports = {
  deploymentHeight: 30262,
  address: '0x3eCB2AFED8417Dd6D8498284379c9535Ca0F21ac',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile);
  }
}
