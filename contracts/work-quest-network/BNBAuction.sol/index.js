const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQCollateralAuction.json');

module.exports = {
  deploymentHeight: 1603262,
  address: '0x97ec2C90F9c1A9979500C7537d87249AdD82D790',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
