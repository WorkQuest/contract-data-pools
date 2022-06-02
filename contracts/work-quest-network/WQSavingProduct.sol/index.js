const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQSavingProduct.json');

module.exports = {
  deploymentHeight: 251435,
  address: '0x905D8bEA76FF7792A8cdbBdb760e89d153DfDaB8',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile.abi);
  }
}
