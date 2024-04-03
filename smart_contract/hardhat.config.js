//https://eth-sepolia.g.alchemy.com/v2/1gKoXgvWNhD_jTgs0OVGC6ZiZcb3QC9u

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/1gKoXgvWNhD_jTgs0OVGC6ZiZcb3QC9u',
      accounts: [ '09f233e9ea3e099ff2f7db7c2e6a3fb2a71914669b852d03ff2859551f854c44' ]
    }
  }
}