const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQReferral.json');

module.exports = {
  deploymentHeight: 95363,
  address: '0x059c1c966E8f1D74e15746A06a6DD074FBB01a4f',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
