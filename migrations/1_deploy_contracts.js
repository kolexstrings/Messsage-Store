const messageStore = artifacts.require("messageStore");

// module.exports = function(deployer) {
//   deployer.deploy(messageStore);
// };

module.exports = async function(deployer) {
  // deploy a contract
  await deployer.deploy(messageStore);
  //access information about your deployed contract instance
  const instance = await messageStore.deployed();
}
