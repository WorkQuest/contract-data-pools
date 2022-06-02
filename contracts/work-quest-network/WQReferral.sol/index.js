const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQReferral.json');

module.exports = {
  deploymentHeight: 13345,
  address: '0x3407513Da10AD7051895aA53203B44b448d815db',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile.abi);
  }
}
