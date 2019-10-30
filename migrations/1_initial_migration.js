const Migrations = artifacts.require("Migrations");
const Auction1 = artifacts.require("Auction");

module.exports = function(deployer) {
  deployer.deploy(Auction1);
};
