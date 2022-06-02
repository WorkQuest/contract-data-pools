const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQPromotion.json');

module.exports = {
  deploymentHeight: 14052,
  address: '0xB778e471833102dBe266DE2747D72b91489568c2',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile).abi;
  }
}
