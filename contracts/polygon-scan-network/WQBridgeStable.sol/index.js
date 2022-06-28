const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQBridgeStable.json');

module.exports = {
    deploymentHeight: 30085669,
    address: '0xe89508D74579A06A65B907c91F697CF4F8D9Fac7',
    getAbi() {
        const abiFile = fs.readFileSync(abiPath).toString();

        return JSON.parse(abiFile).abi;
    }
}
