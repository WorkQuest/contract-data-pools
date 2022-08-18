const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQPensionFund.json');

module.exports = {
  deploymentHeight: 1430341,
  address: '0xE0bE064a7C1573837E58fdD943133265358e235D',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
