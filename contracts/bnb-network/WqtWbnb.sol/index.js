const fs = require('fs');
const path = require('path');

const abiPath = path.join(__dirname, '/abi/WqtWbnb.json');

module.exports = {
    deploymentHeight: 11313023,
    address: '0xe89508D74579A06A65B907c91F697CF4F8D9Fac7',
    getAbi() {
        const abiFile = fs.readFileSync(abiPath).toString();

        return JSON.parse(abiFile).abi;
    }
}
