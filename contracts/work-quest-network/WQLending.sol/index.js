const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQLending.json');

module.exports = {
  deploymentHeight: 254797,
  address: '0x0Cf42bF041C0C89271a426E05FB360c44Ccd79c7',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile.abi);
  }
}
