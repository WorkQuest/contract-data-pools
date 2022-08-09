const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQRouter.json');

module.exports = {
  deploymentHeight: 1602690,
  address: '0x2cAfC9eae7FD650583DE206c088F228D711b8B95',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
