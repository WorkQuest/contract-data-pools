const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQRouter.json');

module.exports = {
  deploymentHeight: 1178239,
  address: '0x5aDE8535127bbc83cc29DE69d7Af81B92a689f10',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
