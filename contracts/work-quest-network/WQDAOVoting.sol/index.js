const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQDAOVoting.json');

module.exports = {
  deploymentHeight: 30400,
  address: '0x4B4a9201384BB7756B2d7ab73b0697cA90A9191E',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
