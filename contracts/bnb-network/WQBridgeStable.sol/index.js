const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQBridgeStable.json');

module.exports = {
    deploymentHeight: 19073887,
    address: '0x527aC80974c66939cBf686648064846708234256',
    getAbi() {
        const abiFile = fs.readFileSync(abiPath).toString();

        return JSON.parse(abiFile).abi;
    }
}
