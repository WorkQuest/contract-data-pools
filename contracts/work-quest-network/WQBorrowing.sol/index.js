const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQBorrowing.json');

module.exports = {
  deploymentHeight: 1430595,
  address: '0xe5F75B3bfB8cFaBF0CF2b71d609Dad46a9398F6E',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
