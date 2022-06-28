const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQBridgeStable.json');

module.exports = {
    deploymentHeight: 15037955,
    address: '0xb29b67Bf5b7675f1ccaCdf49436b38dE337b502B',
    getAbi() {
        const abiFile = fs.readFileSync(abiPath).toString();

        return JSON.parse(abiFile).abi;
    }
}
