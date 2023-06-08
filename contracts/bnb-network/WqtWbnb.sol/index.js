const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WqtWbnb.json');

module.exports = {
    deploymentHeight: 28901654,
    address: '0x39f21593aa5d8fc4a6d0a7e49d80d57f8798eb05',
    getAbi() {
        const abiFile = fs.readFileSync(abiPath).toString();

        return JSON.parse(abiFile).abi;
    }
}
