const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQLending.json');

module.exports = {
  deploymentHeight: 1430484,
  address: '0x816dE5B5fF23b4962dD6f044309F07aA432Dd1f3',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
