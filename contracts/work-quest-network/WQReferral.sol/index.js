const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQReferral.json');

module.exports = {
  deploymentHeight: 30275,
  address: '0x5a1e8B4D64ad9C34B4a70Db3C4Dd53C24Aa41fbE',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
