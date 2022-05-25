const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQStakingWQT.json');

module.exports = {
  deploymentHeight: 32705,
  address: '0xf0eF224b61c2a993Fce09933ef647C3fa37406c5',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile);
  }
}
