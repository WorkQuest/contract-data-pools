const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQBorrowing.json');

module.exports = {
  deploymentHeight: 1757886,
  address: '0xD8A82e611cEC9E776A7106151EbEa32413E00Ac3',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
