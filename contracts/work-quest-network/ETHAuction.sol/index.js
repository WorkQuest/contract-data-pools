const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQCollateralAuction.json');

module.exports = {
  deploymentHeight: 1603261,
  address: '0x498537b9AB6c3C0B4d2Ab6d6cb07edD2AeF21b86',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
