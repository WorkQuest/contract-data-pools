const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQDAOVoting.json');

module.exports = {
  deploymentHeight: 78447,
  address: '0xA903836A89FAf0c7A64DCabf2bCd7b05480b28e9',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
