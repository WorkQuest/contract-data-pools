const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQPensionFund.json');

module.exports = {
  deploymentHeight: 251324,
  address: '0xA6CEEE03708134D4a4e5E0Dd5cf4EaCA91280b22',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
