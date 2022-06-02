const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WorkQuestFactory.json');

module.exports = {
  deploymentHeight: 13433,
  address: '0x455Fc7ac84ee418F4bD414ab92c9c27b18B7B066',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
