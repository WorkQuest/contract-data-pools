const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQDAOVoting.json');

module.exports = {
  deploymentHeight: 149306,
  address: '0xB52c71e0696869548Ea9c20F0F1840875B34c4c8',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile);
  }
}
