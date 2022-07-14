const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQCollateralAuction.json');

module.exports = {
  deploymentHeight: 1215686,
  address: '0x4e843f4f9A7d27eF65b9eeB234FBEBd6e4C2ea4D',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
