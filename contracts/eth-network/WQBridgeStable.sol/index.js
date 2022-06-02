const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WQBridgeStable.json');

module.exports = {
    deploymentHeight: 10581406,
    address: '0x9870a749Ae5CdbC4F96E3D0C067eB212779a8FA1',
    getAbi() {
        const abiFile = fs.readFileSync(abiPath).toString();

        return JSON.parse(abiFile.abi);
    }
}
