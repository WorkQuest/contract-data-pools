const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQPromotion.json');

module.exports = {
  deploymentHeight: 30990,
  address: '0x23918c4cC7001fB4e2BF28c8283b02BcD6975bf0',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile);
  }
}
