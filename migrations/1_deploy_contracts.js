const messageStore = artifacts.require("messageStore");

module.exports = function(deployer) {
  deployer.deploy(messageStore);
};