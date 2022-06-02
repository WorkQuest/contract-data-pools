const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WqtWbnb.json');

module.exports = {
    deploymentHeight: 14000000,
    address: '0x3ea2de549ae9dcb7992f91227e8d6629a22c3b40',
    getAbi() {
        const abiFile = fs.readFileSync(abiPath).toString();

        return JSON.parse(abiFile.abi);
    }
}
