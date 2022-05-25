const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQStakingWQT.json');

module.exports = {
  deploymentHeight: 30508,
  address: '0xd64b62d4F571173c3E27A6aE1cBadaf21d09189C',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile);
  }
}
