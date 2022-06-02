const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WqtWeth.json');

module.exports = {
    deploymentHeight: 13283220,
    address: '0xf1fe852fca1b5a869ef1fe06a2799e1f38b70b84',
    getAbi() {
        const abiFile = fs.readFileSync(abiPath).toString();

        return JSON.parse(abiFile.abi);
    }
}
