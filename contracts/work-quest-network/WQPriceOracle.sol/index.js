const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQPriceOracle.json');

module.exports = {
  deploymentHeight: 511665,
  address: '0x64111bDFf2176CfdFDd2863804f9f6c4F4536AEf',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
