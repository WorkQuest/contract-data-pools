const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQRouter.json');

module.exports = {
  deploymentHeight: 1298454,
  address: '0xA83d2aDedb99ccd6504f522e90A7F9Be96CED053',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
