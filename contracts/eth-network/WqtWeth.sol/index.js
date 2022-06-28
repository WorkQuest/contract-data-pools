const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WqtWeth.json');

module.exports = {
    deploymentHeight: 12010978,
    address: '0x06677Dc4fE12d3ba3C7CCfD0dF8Cd45e4D4095bF',
    getAbi() {
        const abiFile = fs.readFileSync(abiPath).toString();

        return JSON.parse(abiFile).abi;
    }
}
