const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQSurplusAuction.json');

module.exports = {
  deploymentHeight: 32970,
  address: '0x8Ffc078ac6ad5CEc44732928e7832508aFD0A833',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile.abi);
  }
}
