const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQPriceOracle.json');

module.exports = {
  deploymentHeight: 1182728,
  address: '0x2Bf4DEB0d1dDcd19E3561340FCbC9607E00273a7',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
