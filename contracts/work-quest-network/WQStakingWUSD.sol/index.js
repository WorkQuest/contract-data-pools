const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQStakingWUSD.json');

module.exports = {
  deploymentHeight: 32302,
  address: '0x123B3886E11A41251E4ccf51E62e6b8DCadC17D8',
  getAbi() {
    const abiFile = fs.readFileSync(abiPath).toString();

    return JSON.parse(abiFile);
  }
}
