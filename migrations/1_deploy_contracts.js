const messageStore = artifacts.require("messageStore");

module.exports = function(deployer) {
  deployer.link(messageStore);
  deployer.deploy(messageStore);
};