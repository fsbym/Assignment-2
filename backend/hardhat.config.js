require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-chai-matchers");
require("dotenv").config();

module.exports = {
  defaultNetwork: "sepolia",
  solidity: {
    compilers: [
      {
        version: "0.8.7",
      },
      {
        version: "0.8.0",
      },
    ],
  },
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_URL,
      accounts: [process.env.METAMASK_ACCOUNT_PRIVATE_KEY],
    },
  },
};
