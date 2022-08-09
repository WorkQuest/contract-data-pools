const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQCollateralAuction.json');

module.exports = {
  deploymentHeight: 1603263,
  address: '0xDb89f782369bcEe112222eCA66c1A2ad83b6929D',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
