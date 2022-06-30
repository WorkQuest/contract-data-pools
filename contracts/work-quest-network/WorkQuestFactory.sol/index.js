const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WorkQuestFactory.json');

module.exports = {
  deploymentHeight: 95718,
  address: '0x3d9782B4Ba9C10d09973dd1f7C16410c931f5468',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
