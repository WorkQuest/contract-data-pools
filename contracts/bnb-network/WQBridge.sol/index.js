const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQBridge.json');

module.exports = {
  deploymentHeight: 17551373,
  address: '0xd24ae80b2b1d6338d141979C223Ef6EBDD46dF01',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
