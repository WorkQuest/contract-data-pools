const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQRouter.json');

module.exports = {
  deploymentHeight: 1737302,
  address: '0x0BaFa2B642fd79d99d986d46d5e4e7C30149ae50',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
