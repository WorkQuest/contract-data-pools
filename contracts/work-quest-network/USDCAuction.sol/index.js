const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQCollateralAuction.json');

module.exports = {
  deploymentHeight: 1603264,
  address: '0x777D886779A83bDD1649E3b9EAe6D5fdd54c44DA',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
