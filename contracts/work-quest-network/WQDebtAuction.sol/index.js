const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQDebtAuction.json');

module.exports = {
  deploymentHeight: 965076,
  address: '0xdA03BA9436EBcF1A7934506a37D2D919D2598CFF',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
