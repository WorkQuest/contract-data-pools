const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQBridgeStable.json');

module.exports = {
    deploymentHeight: 26116483,
    address: '0xE2e7518080a0097492087E652E8dEB1f6b96B62b',
    getAbi() {
        const abiFile = fs.readFileSync(abiPath).toString();

        return JSON.parse(abiFile).abi;
    }
}
