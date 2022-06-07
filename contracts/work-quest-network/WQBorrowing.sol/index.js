const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQBorrowing.json');

module.exports = {
  deploymentHeight: 30864,
  address: '0xAD10a2538a3FCC3748eD8eC53e586dDf3EA56344',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
