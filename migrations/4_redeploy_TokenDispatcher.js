const TokenDispatcher = artifacts.require("TokenDispatcher");

module.exports = function (deployer) {
    deployer.deploy(TokenDispatcher);
};