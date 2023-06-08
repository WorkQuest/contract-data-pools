const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WqtWbnb.json');

module.exports = {
    deploymentHeight: 28715056,
    address: '0xdB53703E7998441d93794cb0AF1092Fac2778124',
    getAbi() {
        const abiFile = fs.readFileSync(abiPath).toString();

        return JSON.parse(abiFile).abi;
    }
}
