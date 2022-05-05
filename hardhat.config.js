require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString().trim()
const projectId = "15f21d7e629343848529ffa37aec6181"

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: 'https://polygon-mumbai.infura.io/v3/15f21d7e629343848529ffa37aec6181',
      accounts: [privateKey]
    },
    mainnet: {
      url: 'https://polygon-mainnet.infura.io/v3/15f21d7e629343848529ffa37aec6181',
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
