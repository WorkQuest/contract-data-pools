const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQBorrowing.json');

module.exports = {
  deploymentHeight: 268424,
  address: '0x925b9480bc24dEBcBe073efaA7dFa79bA472f39B',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile);
  }
}
