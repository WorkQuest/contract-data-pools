const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQBridgeStable.json');

module.exports = {
    deploymentHeight: 11251266,
    address: '0x27B08AB9d8C24d83e8C2f13D5cf17af7cf57A663',
    getAbi() {
        const abiFile = fs.readFileSync(abiPath).toString();

        return JSON.parse(abiFile).abi;
    }
}
