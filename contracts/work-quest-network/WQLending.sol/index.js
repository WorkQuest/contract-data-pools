const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQLending.json');

module.exports = {
  deploymentHeight: 1757874,
  address: '0x793Da9246356e84bF63952121D651e57c6Cb4BB8',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
