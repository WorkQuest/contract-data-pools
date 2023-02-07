const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WorkQuestFactory.json');

module.exports = {
  deploymentHeight: 1430456,
  address: '0x6E15Be0fFf8357C2A03C8918637b2FeEa2831b5F',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
