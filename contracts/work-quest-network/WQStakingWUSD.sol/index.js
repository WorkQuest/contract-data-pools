const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQStakingWUSD.json');

module.exports = {
  deploymentHeight: 30493,
  address: '0x89F4ef98E10dC9b907Ba0e6cd3D37376D304F5CD',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
